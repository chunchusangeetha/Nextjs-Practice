
import "./globals.css";
import NavBar from "./components/Navbar";
import { Suspense } from "react";
import Loading from "./loading"
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-100">
        <NavBar/>
        <main className="p-6">
          <Suspense fallback = {<Loading/>}>
            {children}
          </Suspense>
        </main>
      </body>
    </html>
  );
}