import { NextResponse } from "next/server";
import { readSheet } from "@/app/lib/sheetsFunctions";

export async function GET() {
  try {
    const rows = await readSheet("Página1!A1:F100");

    const formatted = rows.slice(1).map((row: string[]) => ({
      id: row[0] || "",
      title: row[1] || "",
      originalUrl: row[2] || "",
      shortUrl: row[3] || "",
      clicks: Number(row[4]) || 0,
      createdAt: row[5] ? new Date(row[5]) : new Date(),
    }));

    return NextResponse.json(formatted);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Erro ao acessar Google Sheets" }, { status: 500 });
  }
}
