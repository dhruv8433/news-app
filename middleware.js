import { NextResponse } from "next/server";

const url = "http://localhost:3000";

export async function middleware(request) {
  const isAuthenticate = request.cookies.get("authenticated")?.value === "true";
  const { pathname } = request.nextUrl;

  // if user is unauthenticated and try to access profile page
  if (!isAuthenticate && pathname.startsWith("/profile")) {
    return NextResponse.redirect(new URL(`${url}`, request.url));
  }
}
