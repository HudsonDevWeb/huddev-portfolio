import { NextResponse } from "next/server";
import { deleteLinkById } from "@/app/lib/sheetsFunctions";

export async function DELETE(req: Request) {
  try {
    const { id } = await req.json();

    await deleteLinkById(id);

    return NextResponse.json({ success: true, message: "Link removido!" });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: error.message || "Erro ao deletar link" }, { status: 500 });
  }
}
