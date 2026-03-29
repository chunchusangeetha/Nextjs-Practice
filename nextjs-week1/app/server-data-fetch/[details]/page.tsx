async function fetchUserDetails(currentUserId: number) {

    try {
        const apiResponse = await fetch(`https://dummyjson.com/users/${currentUserId}`);
        const result = await apiResponse.json();
        return result;  
    } catch (error: any) {
        throw new Error(error.message);
    }
}
export default async function UserDetails({params}: any) {

const param = await params
const userDetails =  await fetchUserDetails(param.details);

    return (
        <>
        <h1 className="text-2xl">User Details Page</h1>
        <p>{
            userDetails ? `${userDetails.firstName} ${userDetails.lastName}` : "User not found"
        }</p>
        <p>{userDetails?.age}</p>
        <p>{userDetails?.email}</p>
        <p>{userDetails?.phone}</p>
        </>
    )
}