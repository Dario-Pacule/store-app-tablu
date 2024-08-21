"use client";

import { BackButton } from "@/components/back-button";
import ProductLoader from "@/components/loader/product-loader";
import { Button } from "@/components/ui/button";
import { ScrollBar } from "@/components/ui/scroll-area";
import { Toggle } from "@/components/ui/toggle";
import { useAppDispatch } from "@/lib/redux";
import { addToCart } from "@/lib/redux/slices/cart";
import { useGetProducts } from "@/services/get-products";
import { Product, ProductSize } from "@/types/product";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function Page() {
  const { produt } = useParams();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [mainImage, setMainImage] = useState("");
  const [product, setProduct] = useState<Product>();
  const [selectedSize, setSelectedSize] = useState<ProductSize | null>(null);

  const { data, isLoading, error } = useGetProducts({ _id: produt[0] });

  const addToCartHandler = (product: Product) => {
    if (selectedSize) {
      dispatch(
        addToCart({
          product,
          quantity: 1,
          selectedSize,
        })
      );
    } else {
      toast.warning("Escolha um tamanho.");
    }
  };

  const formatCurrency = (amount: number) => {
    const numberFormat = new Intl.NumberFormat("pt-MZ", {
      style: "currency",
      currency: "MZN",
    });

    return numberFormat.format(amount).replace("MTn", "");
  };

  useEffect(() => {
    if (data && data.length > 0) {
      setProduct(data[0]);
      setMainImage(data[0].images[0]?.url || "");
    }
  }, [data]);

  const handleSizeSelection = (size: ProductSize) => {
    setSelectedSize(size);
  };

  const colorImages =
    product?.images.filter((image) => image.type === "color") || [];
  const viewImages =
    product?.images.filter((image) => image.type === "view") || [];

  return (
    <div className="w-full">
      <BackButton />

      {!isLoading && error && (
        <div className="flex items-center text-center justify-center underline my-12 w-full">
          <p>
            Uma falha foi verifiacada! <br /> Verifique sua internet e atualize
            a pagina
          </p>
        </div>
      )}

      {isLoading && (
        <div className="flex items-center justify-center my-12 w-full">
          <ProductLoader />
        </div>
      )}

      {!isLoading && (
        <div className="flex flex-col md:flex-row gap-8 mt-6 w-full">
          <div className="flex gap-4 w-full  md:w-auto">
            <ScrollArea className="w-[100px] space-y-4">
              <ul className="space-y-3">
                {viewImages.map((image) => (
                  <li
                    key={image._id}
                    className="bg-secondary flex-shrink-0 w-[100px] h-[100px] rounded-lg overflow-hidden cursor-pointer"
                    onClick={() => setMainImage(image.url)}
                  >
                    <div
                      className="w-full h-full"
                      style={{
                        backgroundImage: `url(${image.url})`,
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                      }}
                    />
                  </li>
                ))}
              </ul>
              <ScrollBar className="h-2" orientation="vertical" />
            </ScrollArea>

            <div
              onClick={() => router.push(`/product/${product?._id}`)}
              className="bg-secondary rounded-xl cursor-pointer h-[623px] w-[473px] flex justify-center items-center"
            >
              <div
                style={{
                  backgroundImage: `url(${mainImage})`,
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
                className="w-full h-full rounded-xl"
              />
            </div>
          </div>

          <div className="w-full  md:w-full relative space-y-3 flex flex-col justify-between">
            <div className="space-y-3">
              <h2 className="text-muted-foreground">
                {product?.category.name}
              </h2>

              <h1 className="text-3xl">{product?.name}</h1>

              <p className="text-lg font-bold">
                MT {formatCurrency(product?.price!)}
              </p>

              <p className="text-xs">
                * Entrega grátis para compras acima de MT 15000,00.
              </p>

              <ScrollArea className="w-full">
                <ul className="flex gap-3">
                  {colorImages.map((image) => (
                    <li
                      key={image._id}
                      className="bg-secondary flex-shrink-0 w-[100px] h-[100px] rounded-lg overflow-hidden cursor-pointer"
                      onClick={() => setMainImage(image.url)}
                    >
                      <div
                        className="w-full h-full"
                        style={{
                          backgroundImage: `url(${image.url})`,
                          backgroundSize: "contain",
                          backgroundPosition: "center",
                          backgroundRepeat: "no-repeat",
                        }}
                      />
                    </li>
                  ))}
                </ul>
                <ScrollBar className="h-2" orientation="horizontal" />
              </ScrollArea>

              <div className="space-y-4">
                <p>TAMANHO</p>
                <div className="flex gap-4">
                  {product?.sizes?.map((size) => (
                    <Toggle
                      key={size._id}
                      className={`w-24 py-2 h-fit bg-card ${
                        selectedSize?._id === size._id
                          ? "bg-foreground text-white"
                          : ""
                      }`}
                      variant="outline"
                      pressed={selectedSize?._id === size._id}
                      onPressedChange={() => handleSizeSelection(size)}
                    >
                      {size.name}
                    </Toggle>
                  ))}
                </div>
              </div>

              <div className="pt-4 space-y-3">
                <p>DESCRIÇÃO</p>
                <p className="text-sm line-clamp-4">{product?.description}</p>
              </div>
            </div>

            <Button
              onClick={() => addToCartHandler(product!)}
              className="bg-foreground w-full gap-2 rounded-md"
            >
              <Image
                src="/icons/shopping-bag-white.svg"
                width={24}
                height={24}
                alt="Tablu store logo"
                className="flex-shrink-0"
              />
              <p className="uppercase">Adicionar ao carrinho</p>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
