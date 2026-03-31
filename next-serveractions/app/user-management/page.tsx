import { fetchUserAction } from "@/actions";
import AddNewUser from "@/components/add-new-user";
import SingleUserCard from "@/components/single-user-card";

async function UserManagement() {
  const getListOfUsers = await fetchUserAction();
  return (
    <div className="p-20 max-w-6xl">
      <div className="flex justify-between">
        <h1>User Management</h1>
        <AddNewUser />
      </div>
      <div className="mt-6 grid grid-cols-3 gap-5 sm:grid-cols-2 md:grid-cols-3">
        {getListOfUsers?.data?.length > 0 ? (
          getListOfUsers.data.map((userItem: any) => (
            <SingleUserCard
              key={userItem?._id || userItem?.id}
              user={userItem}
            />
          ))
        ) : (
          <h1>No user found</h1>
        )}
      </div>
    </div>
  );
}

export default UserManagement;
