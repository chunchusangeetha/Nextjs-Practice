import { fetchAuthUserAction } from "./actions";
import { redirect } from "next/navigation";
import Logout from "@/components/log-out/page";

export default async function Home() {
  const currentUser: any = await fetchAuthUserAction();

  if (!currentUser?.success) redirect("/sign-in");
  return (
    <>
      <p>NextJs Authentication</p>
      <p>{currentUser?.data.email}</p>
      <Logout />
    </>
  );
}
