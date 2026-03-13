import { Suspense } from "react";
import UsersList from "./userList";

export default function Userpage() {
    return (
        <>
            <h1 className="text-2xl font-bold">Users DashBoard</h1>
            <Suspense fallback={<p>Loading User.............</p>}>
                <UsersList />
            </Suspense>
        </>
    )
}