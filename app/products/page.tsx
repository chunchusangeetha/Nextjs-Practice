"use client"

import Link from "next/link"
import { usePathname, useRouter,useSearchParams } from "next/navigation"

const products = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Phone" },
  { id: 3, name: "Headphones" }
]

export default function ProductsPage() {
  const router = useRouter()
  const pathName = usePathname();
  console.log("Current Path:", pathName);
  const searchParams = useSearchParams();
  console.log("Search Params:", searchParams.get('search'),searchParams.get('randomvalue'));

  return (
    <div>
      <h1 className="text-2xl font-bold">Products</h1>

      <ul className="mt-4 space-y-4">
        {products.map((product) => (
          <li key={product.id} className="border p-2">
            
            {/* Link to dynamic product */}
            <Link
              className="text-blue-500 block"
              href={`/products/${product.id}`}
            >
              {product.name}
            </Link>

            {/* Button for category route */}
            <button
              onClick={() =>
                router.push(`/products/category/${product.name}`)
              }
              className="mt-2 text-sm text-white bg-green-500 px-2 py-1"
            >
              Go to Category
            </button>

          </li>
        ))}
      </ul>
    </div>
  )
}