type Props = {
  params: {
    id: string
  }
}

export default async function UserDetail({ params }: Props) {
const resolvedparams = await params;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${resolvedparams.id}`
  )

  const user = await res.json()

  return (
    <div>

      <h2 className="text-xl font-bold">
        {user.name}
      </h2>

      <p>Email: {user.email}</p>

      <p>Phone: {user.phone}</p>

    </div>
  )
}