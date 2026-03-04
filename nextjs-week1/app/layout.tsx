import Link from "next/link";
import "./globals.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-100">
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
        </nav>
        <main className="p-6">{children}</main>

      </body>
    </html>
  );
}