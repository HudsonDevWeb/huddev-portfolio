import { NextResponse } from "next/server";
import { getLinkByShort } from "@/app/lib/sheetsFunctions";

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const shortUrl = url.searchParams.get("shortUrl");
    if (!shortUrl) return NextResponse.json({ error: "shortUrl obrigatório" }, { status: 400 });

    const link = await getLinkByShort(shortUrl);
    if (!link) return NextResponse.json({ error: "Link não encontrado" }, { status: 404 });

    return NextResponse.json(link);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Erro ao buscar link" }, { status: 500 });
  }
}
