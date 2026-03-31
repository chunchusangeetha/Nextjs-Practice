"use client";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import React, { useContext, useState } from "react";
import { addNewUserControls, addNewUserInitialValues } from "@/utils";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { addNewUser, editUserAction } from "@/actions";
import { UserContext } from "@/context";

export default function AddNewUser() {
  const context = useContext(UserContext);
  
  if (!context) {
    return null;
  }

  const { openpopup, setOpenPopup, addNewUserFormData, setAddNewUserFormData,currentEditedID,setCurrentEditedID } =
    context;

  function handleSaveButtonValid() {
    return Object.keys(addNewUserFormData).every(
      (key) =>
        addNewUserFormData[key as keyof typeof addNewUserFormData].trim() !==
        "",
    );
  }

  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleAddNewUserAction(
    event: React.FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();
    setIsSubmitting(true);
    try {
      const result = currentEditedID !== null ? await editUserAction(
        currentEditedID,
        "/user-management",
        addNewUserFormData
      ): await addNewUser(addNewUserFormData, "/user-management");

      if (result.success) {
        setOpenPopup(false);
        setAddNewUserFormData(addNewUserInitialValues);
      }
    } catch (err) {
      console.error("Add user submit failed:", err);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div>
      <Button onClick={() => setOpenPopup(true)}>Add New User</Button>
      <Dialog
        open={openpopup}
        onOpenChange={() => {
          setOpenPopup(false);
          setAddNewUserFormData(addNewUserInitialValues);
          setCurrentEditedID(null);
        }}
      >
        <DialogContent className="sm:max-w-106.25">
          <DialogHeader>
            <DialogTitle>{currentEditedID !== null ? "Edit User" : "Add New User"}</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleAddNewUserAction} className="grid gap-4 py-4">
            <div>
              {addNewUserControls.map((control) => (
                <div key={control.name} className="mb-5">
                  <Label htmlFor={control.name} className="text-right">
                    {control.label}
                  </Label>
                  <Input
                    id={control.name}
                    name={control.name}
                    className="col-span-3"
                    placeholder={control.placeholder}
                    type={control.type}
                    value={
                      addNewUserFormData[
                        control.name as keyof typeof addNewUserFormData
                      ]
                    }
                    onChange={(e) =>
                      setAddNewUserFormData({
                        ...addNewUserFormData,
                        [control.name as keyof typeof addNewUserFormData]:
                          e.target.value,
                      })
                    }
                  />
                </div>
              ))}
            </div>

            <DialogFooter>
              <Button
                className="disabled:opacity-55"
                type="submit"
                disabled={!handleSaveButtonValid() || isSubmitting}
              >
                {isSubmitting ? "Saving..." : "Save"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
