export default async function ProductDetails({
  params
}: {
  params: { details: string[] }
}) {
   const resolvedParams = await params;
   console.log(resolvedParams,'8909')
  return (
    <div>
      <h1 className="text-xl font-bold">Product Details</h1>

      <p>Route params:{resolvedParams.details}</p>

    </div>
  )
}