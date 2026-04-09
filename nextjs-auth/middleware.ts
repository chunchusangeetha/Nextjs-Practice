import { NextResponse } from 'next/server';
import {cookies} from 'next/headers'

export async function middleware(request:any){
    const path = request.nextUrl.pathname;
    const checkPublicPath = path === '/sign-in' || path ==='/sign-up'
    const getCookies:any = await cookies();
    const token = getCookies.get("token")?.value || "";

    if(checkPublicPath && token !== ""){
        return NextResponse.redirect(new URL('/',request.nextUrl) )
    }

    if(!checkPublicPath && token === ""){
        return NextResponse.redirect(new URL('/sign-in',request.nextUrl) )

    }

}

export const config = {
     matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
}