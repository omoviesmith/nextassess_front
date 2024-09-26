// src/middleware.js
import { NextResponse } from 'next/server';

export function middleware(request) {
    const userCookie = request.cookies.get('user');

    let user = null;
    try {
        // Ensure userCookie is a string before parsing
        user = userCookie && typeof userCookie.value === 'string' ? JSON.parse(userCookie.value) : null;
    } catch (error) {
        console.error('Failed to parse user cookie:', error);
        user = null; // Explicitly set to null on parse failure
    }

    const { pathname } = request.nextUrl;

    if (!user && pathname !== '/') {
        // Redirect unauthenticated users to the login page
        return NextResponse.redirect(new URL('/', request.url));
    }

    if (user && pathname === '/') {
        // Redirect authenticated users to the dashboard
        return NextResponse.redirect(new URL('/assessments', request.url));
    }

    return NextResponse.next(); // Continue to the requested page
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
