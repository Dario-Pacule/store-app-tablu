"use client";

import { ProductCard } from "@/components/product-card";
import { ProductCategories } from "@/components/product-categories";
import { ProductPagination } from "@/components/product-pagination";
import { SortBy } from "@/components/sort-by";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { useGetProducts } from "@/services/get-products";
import { useState } from "react";

export default function Home() {
  const { data, isLoading } = useGetProducts({});
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 4;

  const currentProducts = data
    ?.filter((p) => p.category.name === "sapatilhas")
    .slice((currentPage - 1) * productsPerPage, currentPage * productsPerPage);

  const totalPages = Math.ceil((data?.length || 0) / productsPerPage);

  return (
    <main>
      <Tabs defaultValue="all">
        <div className="flex w-full justify-between items-center">
          <ProductCategories />
          <SortBy />
        </div>

        <TabsContent value="all">
          <ProductPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <>
              <div className="mt-8 grid grid-cols-4 gap-4">
                {currentProducts?.map((product) => (
                  <ProductCard data={product} key={product._id} />
                ))}
              </div>
            </>
          )}
        </TabsContent>
        <TabsContent value="t-shirt">Lista de camisetas.</TabsContent>
        <TabsContent value="slipper">Lista de sapatos.</TabsContent>
      </Tabs>
    </main>
  );
}
