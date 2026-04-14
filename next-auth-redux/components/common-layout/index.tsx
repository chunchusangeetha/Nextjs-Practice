import { auth } from "@/app/auth";
import Loading from "@/app/loading";
import ReduxProvider from "@/provider";
import { Suspense } from "react";

export default async function CommonLayout({ children }: any) {
  const getSession = await auth();
  return (
    <ReduxProvider getSession={getSession}>
      <Suspense fallback={<Loading/>}>{children}</Suspense>
    </ReduxProvider>
  );
}
