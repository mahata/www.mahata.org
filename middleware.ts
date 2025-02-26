import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const hostname = request.headers.get('host') || '';
  const isProd = process.env.NODE_ENV !== 'development';

  if (isProd && hostname !== 'www.mahata.org') {
    url.hostname = 'www.mahata.org';
    url.protocol = 'https';
    url.port = '';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
