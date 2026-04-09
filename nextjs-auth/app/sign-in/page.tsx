"use client";

import { Label } from "@/components/ui/label";
import { initialLoginFormData, userloginformcontrol } from "../utils";
import CommonFormElement from "@/components/form-element/page";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { loginUserAction } from "../actions";
import { useRouter } from "next/navigation";

export default function SignIn() {
  const [signInFormData,setSignInFormData] = useState<any>(initialLoginFormData)
  const router = useRouter();

   async function  handleSignIn(){
    const result = await loginUserAction(signInFormData);
    console.log(result)
    if(result?.success) router.push('/')

  }
  return (
    <div>
      <h1>Login</h1>
      <form action={handleSignIn}>
        {
          userloginformcontrol.map(controlItem => 
            <div key={controlItem.name}>
              <Label>{controlItem.label}</Label>
              <CommonFormElement
              currentItem = {controlItem}
              value ={signInFormData[controlItem.name]}
              onChange = {
                (event:any) => 
                  setSignInFormData({
                    ...signInFormData,
                    [controlItem.name]:event.target.value
                  })
              }
              />

            </div>
          )
        }
        <Button type="submit">Sign In</Button>
      </form>
    </div>
  );
}
