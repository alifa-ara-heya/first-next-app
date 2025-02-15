import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request) {
    const dummyUserData = {
        role: 'user',
        email: 'test@admin.com'
    }

    let isServicesPage = request.nextUrl.pathname.startsWith('/services')
    let isAdmin = dummyUserData.role === 'admin';

    if (isServicesPage && !isAdmin) {
        return NextResponse.redirect(new URL('/login', request.url))
    }
    console.log(request.nextUrl.pathname.startsWith('/services'));
    return NextResponse.next()
}

/* // See "Matching Paths" below to learn more
export const config = {
    matcher: '/about/:path*',
} */