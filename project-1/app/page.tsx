import Link from "next/link";

export default function Home() {
  return (
    <>
    <h1>Welcome to Recipe App.</h1>
    <Link href="/recipe">Explore Recipes</Link>
    </>
  );
}
