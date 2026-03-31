'use client'

import UserProvider from "@/context"

export default function CommonLayout({ children }: { children: React.ReactNode }) { 
    return <UserProvider>{children}</UserProvider>
}