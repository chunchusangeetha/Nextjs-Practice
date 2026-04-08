"use server";

import { cookies } from "next/headers";
import connectToDB from "../database";
import User from "../models";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export async function registerUserAction(FormData: any) {
  await connectToDB();
  try {
    const { userName, email, password } = FormData;
    const checkUser = await User.findOne({ email });
    if (checkUser) {
      return {
        success: false,
        message: "user already exists! please try with diff email",
      };
    }
    const salt = await bcryptjs.genSalt(10);
    const handlepassword = await bcryptjs.hash(password, salt);

    const newlyCreatedUser = new User({
      userName,
      email,
      password: handlepassword,
    });

    const savedUser = await newlyCreatedUser.save();

    if (savedUser) {
      return {
        success: true,
        data: JSON.parse(JSON.stringify(savedUser)),
      };
    } else {
      return {
        message: "Something error occured! please try again",
        success: false,
      };
    }
  } catch (e) {
    console.log("error", e);
    return {
      message: "Something error occured",
      success: false,
    };
  }
}

export async function loginUserAction(formData: any) {
  await connectToDB();
  try {
    const { email, password } = formData;
    const checkUser = await User.findOne({ email });
    if (!checkUser) {
      return {
        message: "User doesnot exist ! please sign up",
        success: false,
      };
    }

    //password valid

    const checkPassword = await bcryptjs.compare(password, checkUser.password);
    if (!checkPassword) {
      return {
        message: "password is incorrect.please check",
        success: false,
      };
    }

    const createdTokenData = {
      id: checkUser._id,
      userName: checkUser.userName,
      email: checkUser.email,
    };

    const token = jwt.sign(createdTokenData, "DEFAULT_KEY", {
      expiresIn: "1d",
    });
    const getCookies = await cookies();
    getCookies.set("token", token);

    return {
      success: true,
      message: "login successfully",
    };
  } catch (error) {
    return {
      message: "Something error occured! please try again",
      success: false,
    };
  }
}

export async function fetchAuthUserAction() {
  await connectToDB();
  try {
    const getCookies = await cookies();
    const token = getCookies.get("token")?.value || "";
    if (token === "") {
      return {
        success: false,
        message: "Token is invalid",
      };
    }

    const decodedToken:any = jwt.verify(token, "DEFAULT_KEY");
    const getUserInfo = await User.findOne({ _id: decodedToken.id});

    if (getUserInfo) {
      return {
        success: true,
        data: JSON.parse(JSON.stringify(getUserInfo)),
      };
    } else {
      return {
        success: false,
        message: "Some error occured ! please try agian",
      };
    }
  } catch (error) {
    console.log(error);
    return {
      message: "Something error occured! please try again",
      success: false,
    };
  }
}

export async function logoutAction(){
    const getCookies = cookies();
    (await getCookies).set("token","")
}
