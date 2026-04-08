import Image from "next/image";
import { fetchAuthUserAction } from "./actions";
import { redirect } from "next/navigation";
import Logout from "@/components/log-out/page";

export default async function Home() {

  const currentUser :any = await fetchAuthUserAction();

  if(!currentUser?.success)  redirect('/sign-in')
  return (
    <>
    <p>NextJs Authentication</p>
    <h2>{currentUser?.data.UserName}</h2>
    <p>{currentUser?.data.email}</p>
    <Logout/>
    </>
  );
}
