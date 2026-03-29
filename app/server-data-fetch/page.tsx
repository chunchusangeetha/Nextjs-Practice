import Link from "next/link";

//fetch 
async function fetchListUsers() {

    try{
        const apiResponse = await fetch('https://dummyjson.com/users');
        const result = await apiResponse.json();
        return result.users;

    }catch(error:any){
        throw new Error(error.message)
    }

}
export default async function ServerDataFetch() {
    const listOfUsers = await fetchListUsers();
    console.log("List of Users:", listOfUsers);
    return (
        <div>
            <h1 className="text-2xl">Server Data Fetching : Users List</h1>
            <ul>
                {
                    listOfUsers && listOfUsers.length > 0 ?
                    listOfUsers.map((user: any) => (
                        <Link href={`/server-data-fetch/${user.id}`}>
                            <li key={user.id}>{user.firstName} {user.lastName}</li>
                        </Link>
                    )) : null
                }
            </ul>
        </div>
    )
}