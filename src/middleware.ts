import { NextResponse, NextRequest } from 'next/server';
import getLoggedinUser from '@/lib/actions/getLoggedinUser';

export async function middleware(request: NextRequest) {
  const user = await getLoggedinUser();
  const baseUrl = request.nextUrl.origin;

  if (!user) {
    return NextResponse.redirect(`${baseUrl}/blog`);
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/blog/create-blog',
};
