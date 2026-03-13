type Props = { params: { id: string } }
export default async function UserModal({ params }: Props) {
  const resolvedparams = await params
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${resolvedparams.id}`)
  const user = await res.json()
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white p-6 rounded">
        <h2 className="text-xl font-bold"> {user.name} </h2>
        <p>{user.email}</p>
      </div>
    </div>
  )
}