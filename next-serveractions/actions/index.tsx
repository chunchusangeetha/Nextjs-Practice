"use server";

import connectToDatabase from "@/database";
import User from "@/model/user";
import { revalidatePath } from "next/cache";

//add new user action
export async function addNewUser(
  userData: { [key: string]: string },
  pathToRevalidate: string,
) {
  try {
    await connectToDatabase();

    //validate data using joi/other packages
    const newlyCreatedUser = await User.create(userData);
    if (newlyCreatedUser) {
      revalidatePath(pathToRevalidate);
      return {
        success: true,
        message: "User created successfully",
      };
    } else {
      return {
        success: false,
        message: "Something went wrong! Please try again",
      };
    }
  } catch (err) {
    console.error("Error adding new user:", err);
    return {
      success: false,
      message: "Something went wrong! Please try again",
    };
  }
}
// fetch users action
export async function fetchUserAction() {
  await connectToDatabase();
  try {
    const listOfUsers = await User.find({});
    if (listOfUsers) {
      return {
        success: true,
        data: JSON.parse(JSON.stringify(listOfUsers)),
      };
    } else {
      return {
        success: false,
        message: "Something went wrong! Please try again",
      };
    }
  } catch (err) {
    console.error("Error fetching users:", err);
    return {
      success: false,
      message: "Something went wrong! Please try again",
    };
  }
}
//edit user action
export async function editUserAction(
  currentUserId: string,
  pathToRevalidate: string,
  updatedUserData: { [key: string]: string },
) {
  await connectToDatabase();
  try {
    await connectToDatabase();
    const { firstname, email, lastname, address } = updatedUserData;
    const updatedUser = await User.findByIdAndUpdate(
      {
        _id: currentUserId,
      },
      {
        firstname,
        email,
        lastname,
        address,
      },
      {
        new: true,
      },
    );
    if (updatedUser) {
      revalidatePath(pathToRevalidate);
      return {
        success: true,
        message: "User updated successfully",
      };
    } else {
      return {
        success: false,
        message: "not able to update user. Please try again",
      };
    }
  } catch (err) {
    console.error("Error editing user:", err);
    return {
      success: false,
      message: "Something went wrong! Please try again",
    };
  }
}
//delete user action
export async function deleteUserAction(
  currentUserId: string,
  pathToRevalidate: string,
) {
  await connectToDatabase();
  try {
    const deletedUser = await User.findByIdAndDelete(currentUserId);
    if (deletedUser) {
      revalidatePath(pathToRevalidate);
      return {
        success: true,
        message: "User deleted successfully",
      };
    } else {
      return {
        success: false,
        message: "Something went wrong! Please try again",
      };
    }
  } catch (err) {
    console.error("Error deleting user:", err);
    return {
      success: false,
      message: "Something went wrong! Please try again",
    };
  }
}
