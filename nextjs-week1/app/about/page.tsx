"use Client"

import Debounce from "../components/Debounce";
import Throttle from "../components/Throttle";
import UserData from "../components/UserData";

export default function About() {

  return (
    <main>
      <h1 className="text-2xl font-bold mb-2">About Page</h1>
      <p className="text-gray-600">This is the about page of my Next.js application</p>
      <Debounce/>
      <Throttle />
      <UserData/>
    </main>
  );
}