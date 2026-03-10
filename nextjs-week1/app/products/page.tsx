import Link from "next/link"

const products = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Phone" },
  { id: 3, name: "Headphones" }
]

export default function ProductsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Products</h1>

      <ul className="mt-4 space-y-2">
        {products.map(product => (
          <li key={product.id}>
            <Link
              className="text-blue-500"
              href={`/products/${product.id}`}
            >
              {product.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}