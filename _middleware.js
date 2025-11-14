// middleware.js at the root
import { NextResponse } from 'next/server'

export function middleware(req) {
  return new NextResponse('الموقع مغلق مؤقتًا', { status: 503 })
}

// run on every route
export const config = {
  matcher: '/:path*',
}
