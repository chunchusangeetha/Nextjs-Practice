import { NextResponse } from 'next/dist/server/web/exports';
import {cookies} from 'next/headers'

export function middleware(request:any){
    const path = request.nextUrl.pathName;
    const checkPublicPath = path === '/sign-in' || path ==='sign-up'
    const getCookies:any = cookies();
    const token = getCookies.get("token")?.value || "";

    if(checkPublicPath && token !== ""){
        return NextResponse.redirect(new URL('/',request.nextUrl) )
    }

    if(!checkPublicPath && token === ""){
        return NextResponse.redirect(new URL('/sign-in',request.nextUrl) )

    }

}

export const config = {
    matcher : ['/sign-in','/sign-up']
}