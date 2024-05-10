import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;

  const { pathname } = req.nextUrl;

  //already logged in
  if (pathname === "/" && token) {
    return NextResponse.redirect(new URL("/spotify", req.url));
  }

  //not logged yet and trying to visit other pages
  if (!token && pathname !== "/") {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|img/|favicon.ico).*)"],
};
