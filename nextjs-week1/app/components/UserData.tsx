"use client"

import usefetch from "../hooks/usefetch"
export type User = {
    id: number
    name: string
    email: string
}
export default function UserData() {

    const { data, isLoading, error } = usefetch<User[]>("https://jsonplaceholder.typicode.com/users")

    if (isLoading) return <p>Loading...</p>

    if (error) return <p>Error: {error}</p>

    return (
        <main className="p-5">
            <h1 className="text-xl font-bold">UsersList using usefecth</h1>
            <ul> {
                data?.map((user: any) => (
                    <li key={user.id}>{user.name}</li>
                ))
            }
            </ul>
        </main>
    )
}