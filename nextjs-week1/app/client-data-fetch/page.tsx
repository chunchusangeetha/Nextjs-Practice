"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

//useEffect hook
//swr,useSwr hook
//with loading state

export default function ClientDataFetch() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://dummyjson.com/users");
        const data = await response.json();
        if (data.users) {
          console.log("Fetched Users:", data.users);
          setUsers(data.users);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);
  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold">Client Data Fetching</h1>
      {users && users.length > 0
        ? users.map((user: any) => (
            <Link href={`/server-data-fetch/${user.id}`}>
              <li key={user.id}>
                {user.firstName} {user.lastName}
              </li>
            </Link>
          ))
        : null}
    </div>
  );
}
