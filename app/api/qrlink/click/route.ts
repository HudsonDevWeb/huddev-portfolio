import { NextResponse } from "next/server";
import { incrementClicks } from "@/app/lib/sheetsFunctions";

export async function POST(req: Request) {
  try {
    const clickData = await req.json();

    await incrementClicks(clickData.shortUrl);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Erro ao registrar clique" }, { status: 500 });
  }
}
