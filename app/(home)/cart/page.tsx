"use client";

import { BackButton } from "@/components/back-button";
import { CartProduct } from "@/components/cart-product";
import { Card } from "@/components/ui/card";
import { useAppSelector } from "@/lib/redux";
import { formatCurrency } from "@/resources/format-currency";

export default function Page() {
  const cartItem = useAppSelector((state) => state.cart.items);
  const totalPrice = useAppSelector((state) => state.cart.totalPrice);
  const totalQuantity = useAppSelector((state) => state.cart.totalQuantity);

  return (
    <div className="w-full">
      <BackButton />

      <div className="grid gap-4 w-full grid-cols-3">
        <div className="w-full space-y-2 col-span-2">
          <h1 className="text-2xl">MEU CARRINHO</h1>
          <p>
            Total ({totalQuantity} produtos){" "}
            <span className="font-semibold">
              MT {formatCurrency(totalPrice)}
            </span>
          </p>

          {cartItem.length == 0 && (
            <div>
              <p>Voce nao adicionou nenhum item ao carrinho!</p>
            </div>
          )}

          <ul className="space-y-3 w-full">
            {cartItem.map((data) => (
              <CartProduct data={data} />
            ))}
          </ul>
        </div>

        <Card className="w-full flex-shrink-0 h-[520px]"></Card>
      </div>
    </div>
  );
}
