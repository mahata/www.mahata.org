import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Skip redirect in development environment
  if (process.env.NODE_ENV === "development") {
    return NextResponse.next();
  }

  const hostname = request.headers.get("host");
  const targetDomain = "www.mahata.org";

  if (hostname !== targetDomain) {
    return NextResponse.redirect(`https://${targetDomain}${request.nextUrl.pathname}${request.nextUrl.search}`, {
      status: 301,
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all paths except:
     * 1. /api (API routes)
     * 2. /_next (Next.js internals)
     * 3. /static (static files)
     * 4. /_vercel (Vercel internals)
     * 5. all files in the public folder
     */
    "/((?!api|_next|static|_vercel|[\\w-]+\\.\\w+).*)",
  ],
};
