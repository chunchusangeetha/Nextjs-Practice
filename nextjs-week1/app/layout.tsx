
import "./globals.css";
import NavBar from "./components/Navbar";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-100">
        <NavBar/>
        <main className="p-6">{children}</main>

      </body>
    </html>
  );
}