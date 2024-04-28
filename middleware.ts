import { NextRequest, NextResponse } from "next/server";
import { store } from "./app/store/store";
import { headers } from "next/headers";

const testIsLogged: boolean = true;

export async function middleware(request: NextRequest) {
  const isLogged: boolean = store.getState().spotifyReducer.isLogged;

  let response = NextResponse.next();

  response.cookies.set({
    name: "isLogged",
    value: isLogged ? "Yes" : "false",
  });

  if (!testIsLogged && request.url === "http://localhost:3000/spotify") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return response;
  // return NextResponse.next();
}
