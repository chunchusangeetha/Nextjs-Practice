import Link from "next/link"

type User = {
  id: number
  name: string
}

export default async function UsersPage() {

  const res = await fetch(
    "http://localhost:3000/api/usersdynamic"
  )

  const users: User[] = await res.json()

  return (
    <div>

      <h1 className="text-2xl font-bold">
        Users List
      </h1>

      <ul className="mt-4 space-y-2">

        {users.map(user => (
          <li key={user.id}>

            <Link
              href={`/dashboard/usersdynamic/${user.id}`}
              className="text-blue-500"
            >
              {user.name}
            </Link>

          </li>
        ))}

      </ul>

    </div>
  )
}