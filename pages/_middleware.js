import { NextResponse } from 'next/server';

export function middleware(req) {
  return new NextResponse('Site is temporarily offline!', { status: 503 });
}
