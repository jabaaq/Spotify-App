import { NextRequest, NextResponse } from "next/server";
import { store } from "./app/store/store";

const testIsLogged: boolean = true;

export function middleware(request: NextRequest) {
  let response = NextResponse.next();
  const token: string | null = store.getState().spotifyReducer.token;

  console.log(token);

  response.cookies.set({
    name: "isLogged",
    value: "token",
    httpOnly: true,
  });

  if (!testIsLogged && request.url === "http://localhost:3000/spotify") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // return response;
  return NextResponse.next();
}
