import { redirect } from "next/navigation"
import { auth } from "../auth"

export default  async function unauthPage(){
const getSession = await auth()
if(getSession?.user) redirect('/')

    return(
        <div className="p-20">
             <h2 className="text-6xl font-extrabold">You are not logged In.pleasee Login</h2>
        </div>
    )

}