import { redirect } from "next/dist/server/api-utils";
import { NextResponse } from "next/server";
import { RootState, store } from "./app/store/store";

const testIsLogged: boolean = true;

export function middleware(request: Request) {
  if (!testIsLogged && request.url !== "http://localhost:3000") {
    console.log("GOTHCA");
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}
