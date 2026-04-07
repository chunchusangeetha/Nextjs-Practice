'use server'

import connectToDB from "../database"
import User from "../models";
import bcryptjs from "bcryptjs"

export async function registerUserAction(FormData:any){

   await connectToDB();
   try{
    const {userName,email,password} = FormData;
    const checkUser = await User.findOne({email});
    if(checkUser){
        return{
            success:false,
            message:'user already exists! please try with diff email'
        }

    }
    const salt = await  bcryptjs.genSalt(10)
    const handlepassword  = await bcryptjs.hash(password, salt)
    
    const newlyCreatedUser = new User({
        userName,
        email,
        password:handlepassword

    })

    const savedUser = await newlyCreatedUser.save();

    if(savedUser){
        return {
            success:true,
            data: JSON.parse(JSON.stringify(savedUser))
        }
    }else {
        return {
        message:"Something error occured! please try again",
        success:false
    }
    }

   }catch(e){
    console.log('error',e)
    return {
        message:"Something error occured",
        success:false
    }
   }

}