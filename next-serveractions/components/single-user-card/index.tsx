"use client";

import { deleteUserAction } from "@/actions";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { UserContext } from "@/context";
import { useContext } from "react";

export default function SingleUserCard({ user }: any) {
  const context = useContext(UserContext);

  if (!context) {
    return null;
  }

  const { setOpenPopup, setAddNewUserFormData, setCurrentEditedID } = context;

  async function handleEditUser(currentUser: any) {
    setOpenPopup(true);
    setAddNewUserFormData({
      firstname: currentUser.firstname,
      lastname: currentUser.lastname,
      email: currentUser.email,
      address: currentUser.address,
    });
    setCurrentEditedID(currentUser._id);
    
  }
  async function handleDeleteUser(currentUserId: string) {
   await deleteUserAction(currentUserId, "/user-management");
  }

  return (
    <div>
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>
            {user?.firstname} {user?.lastname}
          </CardTitle>
          <CardDescription>{user?.email}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>{user?.address}</p>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button onClick={() => handleEditUser(user)}>Edit</Button>
          <Button onClick={() => handleDeleteUser(user?._id)}>Delete</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
