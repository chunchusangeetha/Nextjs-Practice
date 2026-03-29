type Props = {
    params: {
        id: string,
    }
}
type address = {
    street: string,
    suite: string,
    city: string,
    zipcode: number,
}
type User = {
    id: number
    name: string
    username: string
    email: string
    phone: string
    address: address
}
export default async function UserDetail({ params }: Props) {
    const resolvedParams = await params;
    const usersdata = await fetch(`https://jsonplaceholder.typicode.com/users/${resolvedParams.id}`)
    const userDetails: User = await usersdata.json()
    return (
        <>
            <h1 className="text-2xl font-bold">User Details</h1>
            <div className="mt-4">

                <p >Name: {userDetails.name}</p>
                <p >Username: {userDetails.username}</p>
                <p >Email: {userDetails.email}</p>
                <p >Phone: {userDetails.phone}</p>
                <p >Address:
                    {userDetails.address.street},
                    {userDetails.address.suite},
                    {userDetails.address.city},
                    {userDetails.address.zipcode}
                </p>
            </div>

        </>
    )
}