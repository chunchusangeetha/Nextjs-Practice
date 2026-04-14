"use client";

import { useDispatch, useSelector } from "react-redux";
import { Button } from "../ui/button";
import { addToCart, removeFromCart } from "@/store/slices/cart-slice";

export default function AddToCartButton({productItem}:any) {
  const { cart }: any = useSelector((state) => state);
  console.log(cart?.cartItems);

  const dispatch = useDispatch()

  function handleAddToCart(){
    dispatch(addToCart(productItem))
    
  }
  function handleRemoveFromCart(){
    dispatch(removeFromCart(productItem?.id))

  }

  return (
    <div className="mt-8 mx-w-md">
      <Button type="button" onClick={cart?.cartItems.some((item:any )=>item.id === productItem.id)? handleRemoveFromCart:handleAddToCart}>
        {cart?.cartItems.some((item:any )=>item.id === productItem.id) ? "Remove from Cart": "Add to Cart"}</Button>
    </div>
  );
}
