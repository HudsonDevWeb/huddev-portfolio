import type { NextProxy } from "next/server";
import { NextResponse } from "next/server";

export const proxy: NextProxy = (req) => {
  const token = req.cookies.get("token")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/projects/qrlink/login", req.url));
  }

  if (!token.includes("Bearer")) {
    return NextResponse.redirect(new URL("/projects/qrlink/login", req.url));
  }

  return NextResponse.next();
};

export const config = {
  matcher: ["/projects/qrlink/dashboard/:path*"],
};
