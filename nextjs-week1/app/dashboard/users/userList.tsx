type User = {
  id: number
  name: string
  email: string
}

export default async function UsersList() {

  // simulate slow API
  await new Promise((resolve) =>
    setTimeout(resolve, 3000)
  )

  const res = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  )

  const users: User[] = await res.json()

  return (
    <ul className="mt-4 space-y-2">

      {users.map((user) => (
        <li key={user.id} className="border p-2">
          <p>{user.name}</p>
          <p className="text-gray-500">{user.email}</p>
        </li>
      ))}

    </ul>
  )
}