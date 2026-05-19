export const runtime = "edge";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

function formatApptTime(iso: string): string {
  return new Date(iso).toLocaleString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone: "America/New_York",
  });
}

function formatEmailDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "America/New_York",
  });
}

function formatEmailTime(iso: string): string {
  return new Date(iso).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone: "America/New_York",
  });
}

export async function POST(req: NextRequest) {
  const session = (await cookies()).get("admin_session")?.value;
  if (session !== "authenticated")
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const body = await req.json();
    const { id, cal_booking_uid } = body;

    if (!process.env.CAL_API_KEY)
      return NextResponse.json({ error: "CAL_API_KEY not set" }, { status: 500 });
    if (!id || !cal_booking_uid)
      return NextResponse.json({ error: "Missing id or cal_booking_uid" }, { status: 400 });

    // Fetch patient row for email, name, and appt_time fallback
    const patientRes = await fetch(
      `${process.env.SUPABASE_URL}/rest/v1/patient_intake?id=eq.${id}&select=email,name,appt_time,phone`,
      {
        headers: {
          apikey: process.env.SUPABASE_SERVICE_KEY!,
          Authorization: `Bearer ${process.env.SUPABASE_SERVICE_KEY}`,
        },
      }
    );
    const patientRows: Array<{ email: string | null; name: string | null; appt_time: string | null; phone: string | null }> =
      patientRes.ok ? await patientRes.json() : [];
    const patientEmail = patientRows[0]?.email ?? null;
    const patientName = patientRows[0]?.name ?? "there";
    const existingApptTime = patientRows[0]?.appt_time ?? null;
    const patientPhone = patientRows[0]?.phone ?? null;

    if (patientEmail) {
      console.log("confirm: patientEmail found:", patientEmail);
    } else {
      console.log("confirm: no patientEmail, skipping email send");
    }

    // Confirm booking with Cal.com
    const calRes = await fetch(
      `https://api.cal.com/v2/bookings/${cal_booking_uid}/confirm`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${process.env.CAL_API_KEY}`,
          "cal-api-version": "2026-02-25",
        },
      }
    );

    const calBody = await calRes.text();

    if (!calRes.ok) {
      return NextResponse.json(
        { success: false, calStatus: calRes.status, calBody, cal_booking_uid_sent: cal_booking_uid },
        { status: 500 }
      );
    }

    // Parse Cal.com response for appointment start time
    let startIso: string | null = null;
    try {
      const calJson = JSON.parse(calBody);
      startIso = calJson?.data?.start ?? null;
    } catch {
      console.error("confirm: failed to parse Cal.com response JSON");
    }

    // Update Supabase: status + appt_time if returned by Cal.com
    const updates: Record<string, string> = { status: "scheduled" };
    if (startIso) updates.appt_time = formatApptTime(startIso);

    const sbRes = await fetch(
      `${process.env.SUPABASE_URL}/rest/v1/patient_intake?id=eq.${id}`,
      {
        method: "PATCH",
        headers: {
          apikey: process.env.SUPABASE_SERVICE_KEY!,
          Authorization: `Bearer ${process.env.SUPABASE_SERVICE_KEY}`,
          "Content-Type": "application/json",
          Prefer: "return=minimal",
        },
        body: JSON.stringify(updates),
      }
    );

    if (!sbRes.ok) {
      console.error("confirm: Supabase PATCH failed for row", id, await sbRes.text());
    }

    // Build date/time strings for email
    // Use Cal.com start ISO if available; fall back to pre-formatted Supabase appt_time
    let emailDate: string;
    let emailTime: string;
    if (startIso) {
      emailDate = formatEmailDate(startIso);
      emailTime = formatEmailTime(startIso);
    } else {
      emailDate = existingApptTime ?? "Please contact our office";
      emailTime = "";
    }

    // Send confirmation email to patient via Resend
    if (patientEmail) {
      const emailHtml = `<p>Hi ${patientName},</p>
<p>Your appointment with Hornaman Chiropractic Center has been confirmed. We look forward to seeing you!</p>
<p><strong>Appointment Details:</strong><br>
Date: ${emailDate}${emailTime ? `<br>Time: ${emailTime} ET` : ""}<br>
Location: 107 N. Main St., Union City, PA 16438</p>
<p>Please arrive 10 minutes early to complete any remaining paperwork. If you need to reschedule or cancel, please contact our office at least 24 hours in advance.</p>
<p>Phone: (814) 438-7242</p>
<p><strong>Office Hours:</strong><br>
Monday 8:30 AM – 4:00 PM<br>
Tuesday 9:30 AM – 6:00 PM<br>
Thursday 9:30 AM – 6:00 PM<br>
Friday 8:30 AM – 4:00 PM</p>
<p>We look forward to seeing you.</p>
<p>Dr. Thomas J. Hornaman<br>
Hornaman Chiropractic Center<br>
107 N. Main St., Union City, PA 16438</p>`;

      try {
        console.log("confirm: sending confirmation email to:", patientEmail);
        const resendRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${process.env.RESEND_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "Hornaman Chiropractic Center <appointments@hornamanchiropracticcenter.com>",
            to: [patientEmail],
            subject: "Your Appointment is Confirmed",
            html: emailHtml,
          }),
        });
        const resendBody = await resendRes.text();
        console.log("confirm: Resend status:", resendRes.status, "body:", resendBody);
      } catch (e) {
        console.error("confirm: Resend send failed:", e);
      }
    }

    // Send SMS via Twilio
    if (patientPhone) {
      const twilioSid = process.env.TWILIO_ACCOUNT_SID;
      const twilioToken = process.env.TWILIO_AUTH_TOKEN;
      const twilioFrom = process.env.TWILIO_PHONE_NUMBER;

      const toPhone = patientPhone.replace(/\D/g, "").replace(/^1?/, "+1");
      const apptTimeDisplay = updates.appt_time ?? existingApptTime ?? "your scheduled time";
      const smsBody = `Hi ${patientName}, your appointment at Hornaman Chiropractic Center is confirmed for ${apptTimeDisplay}. Please arrive 10 minutes early. To reschedule call (814) 438-7242. - Dr. Hornaman`;

      try {
        const twilioRes = await fetch(
          `https://api.twilio.com/2010-04-01/Accounts/${twilioSid}/Messages.json`,
          {
            method: "POST",
            headers: {
              "Authorization": "Basic " + btoa(`${twilioSid}:${twilioToken}`),
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
              From: twilioFrom ?? "",
              To: toPhone,
              Body: smsBody,
            }).toString(),
          }
        );
        const twilioData = await twilioRes.json() as { sid?: string; message?: string };
        console.log("confirm: Twilio SMS status:", twilioRes.status, "sid:", twilioData.sid, "error:", twilioData.message);
      } catch (e) {
        console.error("confirm: Twilio SMS failed:", e);
      }
    } else {
      console.log("confirm: no patientPhone on record — SMS not sent");
    }

    return NextResponse.json(
      {
        success: true,
        calStatus: calRes.status,
        calBody,
        cal_booking_uid_sent: cal_booking_uid,
        appt_time: updates.appt_time ?? null,
      },
      { status: 200 }
    );
  } catch (err: unknown) {
    const e = err as { message?: string };
    return NextResponse.json({ error: e.message ?? "unknown" }, { status: 500 });
  }
}
