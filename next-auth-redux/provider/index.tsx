"use client";

import { Header } from "@/components/header";
import store from "@/store";
import { Provider } from "react-redux";

export default function ReduxProvider({ children,getSession }: any) {
  return <Provider store={store}>
    <Header getSession={getSession}/>
    {children}</Provider>;
}