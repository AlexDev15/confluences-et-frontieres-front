import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const locales = ['fr', 'en', 'pt', 'it', 'gl']
const defaultLocale = 'fr'

export function proxy(request: NextRequest) {
    const { pathname } = request.nextUrl

    // Check if the pathname already has a locale
    const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    )

    if (pathnameHasLocale) return NextResponse.next()

    // Redirect to default locale
    return NextResponse.redirect(new URL(`/${defaultLocale}${pathname}`, request.url))
}

export const config = {
    matcher: ['/((?!_next|api|favicon.ico).*)'],
}
