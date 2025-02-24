import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const config = {
  runtime: "edge",
};

export function middleware(request: NextRequest) {
  return NextResponse.next();
}
