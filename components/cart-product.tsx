"use client";

import { useAppDispatch } from "@/lib/redux";
import { CartItem, removeFromCart } from "@/lib/redux/slices/cart";
import { formatCurrency } from "@/resources/format-currency";
import { ChevronDown, Trash2 } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

type Props = {
  data: CartItem;
};

export function CartProduct({ data }: Props) {
  const dispatch = useAppDispatch();

  const removeItemHandler = () => {
    dispatch(removeFromCart({ _id: data._id, sizeId: data.selectedSize._id }));
  };

  return (
    <Card className="flex gap-4 w-full h-fit flex-shrink-0 rounded-xl overflow-hidden">
      <div className="bg-secondary flex-shrink-0 h-[211px] w-[256px]">
        <div
          style={{
            backgroundImage: `url(/img/temp/nike_2/image.png)`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className="w-full h-full rounded-xl"
        />
      </div>

      <div className="flex flex-col w-full py-3 pr-4 justify-between gap-4">
        <div className="flex w-full justify-between">
          <h2 className="text-2xl">{data.name}</h2>
          <Button
            onClick={() => removeItemHandler()}
            variant="ghost"
            className="p-0"
          >
            <Trash2 className="text-destructive" />
          </Button>
        </div>

        <p className="text-sm line-clamp-3">{data.description}</p>

        <div className="flex w-full justify-between items-end">
          <div className="grid grid-cols-3 items-center justify-center border w-20 h-11 bg-secondary rounded-md">
            <div className="flex col-span-2 items-center justify-center w-full">
              <p>{data.quantity}</p>
            </div>
            <Button variant="ghost" className="p-0 mr-2">
              <ChevronDown size={18} />
            </Button>
          </div>

          <p className="font-bold text-lg">
            MT {formatCurrency(data.price * data.quantity)}
          </p>
        </div>
      </div>
    </Card>
  );
}
