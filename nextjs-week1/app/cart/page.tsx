"use client";
import { redirect, usePathname } from "next/navigation";

export default function CartPage() {
    const handleClick = ()=> {
        redirect("/products?search=product1&randomvalue=123")
    }
    const pathName = usePathname();
    console.log("Current Path:", pathName);


  return (
    <div>
      <h1 className="text-2xl font-bold">Cart</h1>
      <p className="mt-4 text-gray-600">Your cart is currently empty.</p>
      <button onClick={handleClick}>Product page</button>
            <button onClick={()=> redirect("/users?search=user1&randomvalue=456")}>users page</button>
    </div>
  );
}
