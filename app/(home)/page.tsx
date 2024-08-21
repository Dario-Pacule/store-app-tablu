"use client";

import { ProductCard } from "@/components/product-card";
import { ProductCategories } from "@/components/product-categories";
import { SortBy } from "@/components/sort-by";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { useGetProducts } from "@/services/get-products";

export default function Home() {
  const { data, isLoading } = useGetProducts({});

  return (
    <main>
      <Tabs defaultValue="all">
        <div className="flex w-full justify-between items-center">
          <ProductCategories />
          <SortBy />
        </div>

        <TabsContent className="grid grid-cols-4 gap-4" value="all">
          {isLoading ? (
            <></>
          ) : (
            data?.map((product, i) => (
              <ProductCard data={product} key={product._id} />
            ))
          )}
        </TabsContent>
        <TabsContent value="t-shirt">Lista de camisetas.</TabsContent>
        <TabsContent value="slipper">Lista de sapatos.</TabsContent>
      </Tabs>
    </main>
  );
}
