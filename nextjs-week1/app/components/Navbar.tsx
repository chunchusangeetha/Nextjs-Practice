import Link from "next/link";

export default function NavBar() {

    console.log("Navbar render")
    return (
        <nav className="bg-white shadow-md px-6 py-4 flex gap-6">
            <Link href="/" className="text-blue-600 font-semibold hover:underline">
                Home
            </Link>
            <Link href="/about" className="text-blue-600 font-semibold hover:underline">
                About
            </Link>
            <Link href="/contact" className="text-blue-600 font-semibold hover:underline">
                Contact
            </Link>
            <Link href="/products" className="text-blue-600 font-semibold hover:underline">
                Products
            </Link>
            <Link href="/users" className="text-blue-600 font-semibold hover:underline">
                Users
            </Link>
        </nav>
    )
}