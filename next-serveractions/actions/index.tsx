"use server";

import connectToDatabase from "@/database";
import User from "@/model/user";

//add new user action
export async function addNewUser(userData: { [key: string]: string }) {
  try {
    await connectToDatabase();

    //validate data using joi/other packages
    const newlyCreatedUser = await User.create(userData);

    return {
      success: !!newlyCreatedUser,
      message: newlyCreatedUser
        ? "User created successfully"
        : "Failed to create user",
    };
  } catch (err) {
    console.error("Error adding new user:", err);
    return {
      success: false,
      message:
        err instanceof Error
          ? `Database error: ${err.message}`
          : "Something went wrong! Please try again",
    };
  }
}
// fetch users action
//edit user action
//delete user action
