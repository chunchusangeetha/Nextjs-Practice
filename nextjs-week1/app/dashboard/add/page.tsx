import { createUser } from "@/app/actions/userActions";

export default function AddUserPage() {
  return (
    <div>

      <h1 className="text-2xl font-bold">
        Add User
      </h1>

      <form action={createUser} className="mt-4 space-y-3">

        <input
          name="name"
          placeholder="Name"
          className="border p-2 w-full"
        />

        <input
          name="email"
          placeholder="Email"
          className="border p-2 w-full"
        />

        <button className="bg-blue-500 text-white px-4 py-2">
          Submit
        </button>

      </form>

    </div>
  )
}