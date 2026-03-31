import { addNewUserInitialValues } from "@/utils";
import { createContext, useState } from "react";

export const UserContext = createContext<{
  currentEditedID: null | string;
  setCurrentEditedID: React.Dispatch<React.SetStateAction<null | string>>;
  openpopup: boolean;
  setOpenPopup: React.Dispatch<React.SetStateAction<boolean>>;
  addNewUserFormData: typeof addNewUserInitialValues;
  setAddNewUserFormData: React.Dispatch<React.SetStateAction<typeof addNewUserInitialValues>>;
} | null>(null);

export default function UserProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [openpopup, setOpenPopup] = useState(false);
  const [addNewUserFormData, setAddNewUserFormData] = useState(
    addNewUserInitialValues,
  );
  const [currentEditedID, setCurrentEditedID] = useState<null | string>(null);
  return (
    <UserContext.Provider
      value={{
        currentEditedID,
        setCurrentEditedID,
        openpopup,
        setOpenPopup,
        addNewUserFormData,
        setAddNewUserFormData,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
