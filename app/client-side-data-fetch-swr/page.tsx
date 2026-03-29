
"use client";
import Link from "next/link";
import useSWR from "swr";

const fetcher = (...args: [string, RequestInit?]) => fetch(...args).then(res => res.json());
export default function ServerDataFetch() {
    const { data, error, isLoading } = useSWR('https://dummyjson.com/users', fetcher);
if (isLoading) return <p>Loading...</p>;
if (error) return <p>Error loading data</p>;
return (
    <div>
      <h1>Server Data Fetching using swr</h1>
       {data && data.users && data.users.length > 0
        ? data.users.map((user: any) => (
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