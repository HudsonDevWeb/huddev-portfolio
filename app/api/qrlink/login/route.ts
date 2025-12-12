import { NextResponse } from "next/server";
import { generateToken } from "@/app/lib/tokenGenerator";

export async function POST(request: Request) {
  const { email, password } = await request.json();

  const adminEmail = process.env.QRLINK_EMAIL;
  const adminPassword = process.env.QRLINK_PASSWORD;

  if (email === adminEmail && password === adminPassword) {
    const token = generateToken();
    return NextResponse.json({ success: true, token: `Bearer ${token}` }, { status: 200 });
  }

  return NextResponse.json(
    { success: false, message: "Email ou senha incorretos" },
    { status: 401 }
  );
}
