import { NextResponse } from "next/server";
import { appendSheet } from "@/app/lib/sheetsFunctions";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const values = [[
      body.id,
      body.title,
      body.originalUrl,
      body.shortUrl,
      body.clicks ?? 0,
      body.createdAt ?? new Date().toISOString(),
    ]];

    await appendSheet(values, "Página1!A:F");

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Erro ao adicionar link" }, { status: 500 });
  }
}
