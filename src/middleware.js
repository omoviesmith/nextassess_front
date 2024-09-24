import { NextResponse } from 'next/server';

export function middleware(request) {
    const user = request.cookies.get('user');

    if (!user && request.nextUrl.pathname !== '/') {
        return NextResponse.redirect(new URL('/', request.url));
    }

    if (user && request.nextUrl.pathname === '/') {
        return NextResponse.redirect(new URL('/assessments', request.url));
    }
}

export const config = {
    matcher: [
        '/admin/:path*',
        '/assessments',
        '/assessment/:path*',
        '/courses',
        '/support',
        '/subscription',
        '/users',
        '/account',
        '/'
    ],
};
