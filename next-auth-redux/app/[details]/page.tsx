import fetchProductDetails from "@/actions";
import AddToCartButton from "@/components/add-to-cart-button";
import { auth } from "../auth";
import { redirect } from "next/navigation";

export default async function ProductDetails({ params }: any) {
  const param = await params;
  const getProductDetails = await fetchProductDetails(param.details);
  console.log(":::", getProductDetails);

  const getSession = await auth();
  if(!getSession?.user) redirect('/unauth-page')

  return (
    <div className="max-w-6xl mx-auto p-2">
      <div className="p-6">
        <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-12 ">
          <div className="lg:col-span-3  bg-gray-100 w-full lg:sticky top-0 text-center p-8">
            <img
              src={getProductDetails?.thumbnail}
              alt={getProductDetails?.title}
              className="w-4/5 rounded object-corner "
            />
            <hr className="border-black border-2 my-6"></hr>
            <div className="flex flex-wrap gap-5 justify-center mx-auto">
              {getProductDetails?.images?.map((imageItem: any) => (
                <img
                  key={imageItem}
                  src={imageItem}
                  alt={imageItem}
                  className="w-24 cursor-pointer"
                />
              ))}
            </div>
          </div>
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-gay-900">{getProductDetails?.title}</h2>
            <p className="text-gray-800 textxl">{getProductDetails?.price}</p>
            <h3 className="text-lg font-bold text-gray-700">
                {getProductDetails.description}
            </h3>
            <AddToCartButton productItem = {getProductDetails}/>
          </div>
        </div>
      </div>
    </div>
  );
}
