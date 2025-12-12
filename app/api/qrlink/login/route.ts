import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { email, password } = await request.json();

  const adminEmail = process.env.QRLINK_EMAIL;
  const adminPassword = process.env.QRLINK_PASSWORD;

  if (email === adminEmail && password === adminPassword) {
    return NextResponse.json({ success: true });
  }

  return NextResponse.json(
    { success: false, message: "Email ou senha incorretos" },
    { status: 401 }
  );
}
