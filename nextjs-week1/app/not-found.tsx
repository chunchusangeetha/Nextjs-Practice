import Link from "next/link";

export default function Not_found(){
    return (
        <>

            <h1 className="text-5xl">This Page does Not Found!</h1>
            <Link href="/">Go Back to Home page</Link>
        </>
    )
}