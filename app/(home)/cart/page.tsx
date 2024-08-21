"use client";

import { BackButton } from "@/components/back-button";
import { CartProduct } from "@/components/cart-product";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useAppSelector } from "@/lib/redux";
import { formatCurrency } from "@/resources/format-currency";
import Link from "next/link";

export default function Page() {
  const cartItem = useAppSelector((state) => state.cart.items);
  const totalPrice = useAppSelector((state) => state.cart.totalPrice);
  const totalQuantity = useAppSelector((state) => state.cart.totalQuantity);

  return (
    <div className="w-full">
      <BackButton className="p-0" />

      <div className="grid grid-cols-1  md:grid-cols-3 gap-4 mt-4 w-full ">
        <div className="w-full order-2 md:order-1 space-y-2 col-span-2">
          <h1 className="text-2xl hidden md:block">MEU CARRINHO</h1>
          <p className="hidden md:block">
            Total ({totalQuantity} produtos){" "}
            <span className="font-semibold">
              MT {formatCurrency(totalPrice)}
            </span>
          </p>

          {cartItem.length == 0 && (
            <div className="flex justify-center w-full underline pt-12">
              <p>Você ainda não adicionou itens ao carrinho!</p>
            </div>
          )}

          <ul className="space-y-3 w-full">
            {cartItem.map((data) => (
              <CartProduct data={data} />
            ))}
          </ul>
        </div>

        <Card className="relative w-full order-1 md:order-2 flex-shrink-0 p-4 py-6 md:h-[520px]">
          <p className="font-bold text-lg">RESUMO DO PEDIDO</p>

          <div className="flex flex-col gap-3 text-sm mt-4">
            <div className="flex w-full justify-between">
              <p>Subtotal de produtos</p>
              <p>MT {formatCurrency(totalPrice)}</p>
            </div>

            <div className="flex w-full justify-between">
              <p>Entrega</p>
              <p>MT {formatCurrency(0)}</p>
            </div>

            <div className="w-full h-0.5 mt-2 bg-background" />
          </div>

          <div className="flex font-semibold mt-4 mb-8 w-full justify-between">
            <p>Total</p>
            <p>MT {formatCurrency(totalPrice)}</p>
          </div>

          <Button className="bg-foreground w-full rounded-md">
            FINALIZAR A COMPRA
          </Button>

          <Link
            href="#"
            className="absolute hidden md:block underline text-muted-foreground bottom-5 left-5"
          >
            Ajuda
          </Link>
        </Card>
      </div>
    </div>
  );
}
