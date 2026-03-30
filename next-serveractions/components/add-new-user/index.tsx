"use client";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import React, { useState } from "react";
import { addNewUserControls, addNewUserInitialValues } from "@/utils";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { addNewUser } from "@/actions";

export default function AddNewUser() {
  const [openpopup, setOpenPopup] = useState(false);
  const [addNewUserFormData, setAddNewUserFormData] = useState(
    addNewUserInitialValues,
  );
  console.log("addNewUserFormData", addNewUserFormData);
  function handleSaveButtonValid() {
    return Object.keys(addNewUserFormData).every(
      (key) =>
        addNewUserFormData[key as keyof typeof addNewUserFormData].trim() !==
        "",
    );
  }

  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleAddNewUserAction(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    try {
      const result = await addNewUser(addNewUserFormData);
      console.log("Result from addNewUser action:", result);

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
        }}
      >
        <DialogContent className="sm:max-w-106.25">
          <DialogHeader>
            <DialogTitle>Add New User</DialogTitle>
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
