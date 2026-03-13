import Link from "next/link"
import React from "react"

export default function DashboardLayout({ children,modal }:
     { children: React.ReactNode,
        modal :React.ReactNode
      }) {
    return (
        <>
            <div className="flex">
                <aside className="w-60 bg-gray-200 p-4">
                    <ul className="space-y-3">
                        <li><Link href="/dashboard">Dashboard Homeg</Link></li>
                        <li><Link href="/dashboard/users">Users</Link></li>
                        <li><Link href="/dashboard/usersdynamic">UersDynamic(formodal)</Link></li>

                    </ul>
                </aside>
                <main className="flex-1 p-6">
                    {children}
                    
                </main>
              
                
            </div>
                    {modal}
        </>

    )
}