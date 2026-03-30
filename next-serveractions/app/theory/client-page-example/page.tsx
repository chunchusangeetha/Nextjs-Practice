// "use client";

// import fetchListProducts from "@/actions";
// import { useEffect, useState } from "react";

// function ClientPageExample() {
//   const [productlist, setProductList] = useState([]);
//   const [loading, setLoading] = useState(true);
//   async function getListProducts() {
//     const data = await fetchListProducts();
//     console.log("Products from client component:", data);
//     setProductList(data);
//     setLoading(false);
//   }
//   useEffect(() => {
//     getListProducts();
//   }, []);
//   if (loading) return <p>Loading... please wait.</p>;
//   return (
//     <>
//       <h1>Server actions example client components</h1>
//       <ul>
//         {productlist && productlist.length > 0
//           ? productlist.map((product: any) => (
//               <li key={product.id}>{product.title}</li>
//             ))
//           : null}
//       </ul>
//     </>
//   );
// }

// export default ClientPageExample;
