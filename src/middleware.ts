import { NextResponse, NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  const session = request.cookies.get("auth-session");
  const baseUrl = request.nextUrl.origin;

  if (!session || !session.value) {
    return NextResponse.redirect(baseUrl + "/blog");
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/blog/create-blog',
}