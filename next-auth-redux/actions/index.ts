'use server'

import { signIn, signOut } from "@/app/auth";

//get all products

export async function fetchAllProducts(){
    try{

        const result = await fetch('https://dummyjson.com/products',{
            method:'GET',
            cache:'no-store'
        })
        const data = await result.json();
        return {
            success:true,
            data:data?.products
        }

    }catch(e){
        console.log(e);
        return {
            success:false,
            message:'Some error occured! please try again'
        }
    }


}

export default async function fetchProductDetails(currentProductID:any){
    try{

        const result = await fetch(`https://dummyjson.com/products/${currentProductID}`,{
            method:"GET",
            cache:'no-store'
        })
        const data = await result.json()

        return data;

    }catch(e){
        console.log(e);
        return {
            success:false,
            message:'Some error occured! please try again'
        }
    }
}

export async function loginAction(){
    await signIn('github')

}
export async function logoutAction(){
    await signOut()
    
}