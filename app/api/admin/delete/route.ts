import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export const runtime = "edge";

export async function DELETE(request: NextRequest) {
  const session = (await cookies()).get("admin_session")?.value;
  if (session !== "authenticated")
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { ids } = await request.json();

  if (!ids || !Array.isArray(ids) || ids.length === 0) {
    return NextResponse.json({ error: "Missing or empty ids" }, { status: 400 });
  }

  const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  if (!ids.every((id: unknown) => typeof id === "string" && UUID_RE.test(id)))
    return NextResponse.json({ error: "Invalid ids" }, { status: 400 });

  const inList = ids.join(",");

  try {
    const res = await fetch(
      `${process.env.SUPABASE_URL}/rest/v1/patient_intake?id=in.(${inList})`,
      {
        method: "DELETE",
        headers: {
          apikey: process.env.SUPABASE_SERVICE_KEY!,
          Authorization: `Bearer ${process.env.SUPABASE_SERVICE_KEY}`,
          Prefer: "return=minimal",
        },
      }
    );

    if (!res.ok) {
      return NextResponse.json({ error: "Delete failed" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Bulk delete error:", err);
    return NextResponse.json({ error: "Delete failed" }, { status: 500 });
  }
}
