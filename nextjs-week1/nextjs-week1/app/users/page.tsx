import Link from "next/link"

type User = {
    id: number
    name: string
}
export default async function Users() {
    const users = await fetch("https://jsonplaceholder.typicode.com/users",
        {
            next: { revalidate: 60 }
        }
    )
    const usersData: User[] = await users.json()


    return (
        <>
            <h1 className="text-2xl font-bold">Users Lists</h1>
            <ul className="mt-4 space-y-2">
                {usersData.map((user: any) => (
                    <li key={user.id}><Link
                        className="text-blue-500"
                        href={`/users/${user.id}`}>
                        {user.name}
                    </Link></li>
                ))}
            </ul>
        </>
    )
}