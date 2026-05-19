import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

export async function DELETE(request: NextRequest) {
  const { ids } = await request.json();

  if (!ids || !Array.isArray(ids) || ids.length === 0) {
    return NextResponse.json({ error: "Missing or empty ids" }, { status: 400 });
  }

  const inList = ids.join(",");
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
}
