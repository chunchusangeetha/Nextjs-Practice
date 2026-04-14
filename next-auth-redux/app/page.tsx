import { fetchAllProducts } from "@/actions";
import ProductCard from "@/components/productscard";
import { auth } from "./auth";
import { redirect } from "next/navigation";

export default async function Home() {

  const getSession = await auth();
  console.log(getSession)
  const getAllProducts = await fetchAllProducts()
  console.log('getAll',getAllProducts)

  if(!getSession?.user)  redirect('/unauth-page')
  return (
    <div>
      <h1>Shopping Cart</h1>
      <div className="min-h-[8ovh] grid sm:grid-cols-2 md:grid-cols-3 lg:grid:cols-4 gap-10 max-w-6xl mx-auto p-2">
        {
          getAllProducts && getAllProducts.data && getAllProducts.data.length > 0 ? 
          getAllProducts.data.map((productItem:any) => <ProductCard key={productItem?.title} item={productItem}/>)
          :null
        }
      </div>
    </div>
  );
}
