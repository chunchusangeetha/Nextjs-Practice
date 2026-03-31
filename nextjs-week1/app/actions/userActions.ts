"use server"

import { redirect } from "next/navigation"

export async function createUser(formData: FormData) {
  const name = formData.get("name")
  const email = formData.get("email")

  await fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    body: JSON.stringify({ name, email }),
    headers: {
      "Content-Type": "application/json"
    }
  })

  redirect("/dashboard/users")
}