import Link from "next/link"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div className="flex">
                <aside className="w-60 bg-gray-200 p-4">
                    <ul className="space-y-3">
                        <li><Link href="/dashboard">Dashboard Homeg</Link></li>
                        <li><Link href="/dashboard/user">User</Link></li>

                    </ul>
                </aside>
                <main className="flex-1 p-6">
                    {children}
                </main>
            </div>
        </>

    )
}