"use client";

import { Label } from "@/components/ui/label";
import { initialSignUpData, userRegistrationFormControls } from "../utils";
import CommonFormElement from "@/components/form-element/page";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { registerUserAction } from "../actions";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const [signUpFormData, setSignUpFormData] = useState<any>(initialSignUpData);
  const router = useRouter();
  function handleSignUpButtonValid() {
    return Object.keys(signUpFormData).every(
      (key) => signUpFormData[key].trim() !== "",
    );
  }

  async function handleSignUp() {
    const result = await registerUserAction(signUpFormData);
    console.log("result", result);
    if (result?.data) router.push("/sign-in");
  }
  return (
    <div>
      <h1>Sign Up page</h1>
      <form action={handleSignUp}>
        {userRegistrationFormControls.map((controlItem) => (
          <div key={controlItem.name}>
            <Label>{controlItem.label}</Label>
            <CommonFormElement
              currentItem={controlItem}
              value={signUpFormData[controlItem.name]}
              onChange={(event: any) =>
                setSignUpFormData({
                  ...signUpFormData,
                  [controlItem.name]: event.target.value,
                })
              }
            />
          </div>
        ))}
        <Button
          disabled={!handleSignUpButtonValid()}
          className="disabled:opacity-65"
          type="submit"
        >
          Sign Up
        </Button>
      </form>
    </div>
  );
}
