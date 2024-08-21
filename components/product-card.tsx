"use client";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { useAppDispatch } from "@/lib/redux";
import { addToCart } from "@/lib/redux/slices/cart";
import { Product } from "@/types/product";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "./ui/button";

type Props = {
  data: Product;
};

export function ProductCard({ data }: Props) {
  const [mainImage, setMainImage] = useState(data.images[0]?.url || "");
  const dispatch = useAppDispatch();
  const router = useRouter();

  const addToCartHandler = (product: Product) => {
    dispatch(
      addToCart({ product, quantity: 1, selectedSize: product.sizes![0] })
    );
  };

  const formatCurrency = (amount: number) => {
    const numberFormat = new Intl.NumberFormat("pt-MZ", {
      style: "currency",
      currency: "MZN",
    });

    return numberFormat.format(amount).replace("MTn", "MT");
  };

  const colorImages =
    data?.images.filter((image) => image.type === "color") || [];

  return (
    <div
      style={{
        filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1))",
      }}
      className="bg-card flex-shrink-0 rounded-xl w-full overflow-hidden"
    >
      <div
        onClick={() => router.push(`/product/${data._id}`)}
        className="bg-secondary cursor-pointer h-[300px]"
      >
        <div
          style={{
            backgroundImage: `url(${mainImage})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className="w-full h-full flex-shrink-0"
        />
      </div>

      <div className="flex flex-col">
        <ScrollArea className="w-full whitespace-nowrap pt-3 px-3">
          <ul className="flex gap-3 pb-3">
            {colorImages.map((image) => (
              <li
                key={image._id}
                className="bg-secondary flex-shrink-0 w-[50px] h-[45px] rounded-sm overflow-hidden cursor-pointer"
                onClick={() => setMainImage(image.url)}
                style={{
                  backgroundImage: `url(${image.url})`,
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="w-full h-full" />
              </li>
            ))}
          </ul>

          <ScrollBar className="h-2" orientation="horizontal" />
        </ScrollArea>

        <p className="text-lg line-clamp-1 px-3">{data.name}</p>

        <div className="flex w-full">
          <div className="flex items-center w-full ml-3 mr-2 border-t-2 border-background">
            <p className="font-bold text-lg">{formatCurrency(data.price)}</p>
          </div>

          <Button
            onClick={() => addToCartHandler(data)}
            className="h-[49px] w-[59px] rounded-none"
          >
            <Plus size={24} />
          </Button>
        </div>
      </div>
    </div>
  );
}
