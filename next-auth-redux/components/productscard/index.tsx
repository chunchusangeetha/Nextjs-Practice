"use client";

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { Card, CardContent, CardTitle } from "../ui/card";

export default function ProductCard({ item }: any) {
    const router = useRouter()
  return (
    <Card>
      <CardContent>
        <div className="w-full ascpect-w-16 aspect-h-8 lg:h-80">
          <img
            src={item?.thumbnail}
            alt={item?.title}
            className="h-full w-full object-cover object-top"
          />
        </div>
        <div className="p-6">
          <CardTitle className="text-lg font-bold text-gray-900">
            {item?.title}
          </CardTitle>
          <div className="mt-4 flex justify-between items-center flex-wrap gap-2">
            <p className="text-lg font-extrabold text-gay-800">{item?.price}</p>
            <div>
                <Button onClick={()=> router.push(`/${item.id}`)}>Details</Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
