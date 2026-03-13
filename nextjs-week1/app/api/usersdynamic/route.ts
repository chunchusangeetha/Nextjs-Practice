export async function GET() {

  const res = await fetch(
    "https://jsonplaceholder.typicode.com/users",
    { next: { revalidate: 60 } }
  )

  const users = await res.json()

  return Response.json(users)

}