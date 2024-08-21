"use client";

import ProductLoader from "@/components/loader/product-loader";
import { ProductCard } from "@/components/product-card";
import { ProductCategories } from "@/components/product-categories";
import { ProductPagination } from "@/components/product-pagination";
import { SortBy } from "@/components/sort-by";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { useGetProducts } from "@/services/get-products";
import { Product } from "@/types/product";
import { useState } from "react";

export default function Home() {
  const { data, isLoading } = useGetProducts({});
  const [currentPages, setCurrentPages] = useState<{ [key: string]: number }>({
    sapatilhas: 1,
    camisetas: 1,
  });
  const productsPerPage = 4;

  const getProductsByCategory = (category: string) => {
    return data?.filter((product) => product.category.name === category) || [];
  };

  const handlePageChange = (category: string, newPage: number) => {
    setCurrentPages((prev) => ({
      ...prev,
      [category]: newPage,
    }));
  };

  const getProductPage = (category: string, products: Product[]) => {
    const currentPage = currentPages[category] || 1;
    return products.slice(
      (currentPage - 1) * productsPerPage,
      currentPage * productsPerPage
    );
  };

  return (
    <main>
      <Tabs defaultValue="all">
        <div className="flex w-full justify-between items-center">
          <ProductCategories />
          <SortBy />
        </div>

        <TabsContent value="all">
          {isLoading ? (
            <ProductLoader />
          ) : (
            <div className="space-y-8">
              <ProductPagination
                currentPage={currentPages["sapatilhas"]}
                totalPages={Math.ceil(
                  getProductsByCategory("sapatilhas").length / productsPerPage
                )}
                onPageChange={(newPage) =>
                  handlePageChange("sapatilhas", newPage)
                }
              />
              <div className="grid grid-cols-4 gap-4">
                {getProductPage(
                  "sapatilhas",
                  getProductsByCategory("sapatilhas")
                ).map((product) => (
                  <ProductCard data={product} key={product._id} />
                ))}
              </div>

              <div className="grid grid-cols-4 gap-4">
                {getProductPage(
                  "camisetas",
                  getProductsByCategory("camisetas")
                ).map((product) => (
                  <ProductCard data={product} key={product._id} />
                ))}
              </div>

              <ProductPagination
                currentPage={currentPages["camisetas"]}
                totalPages={Math.ceil(
                  getProductsByCategory("camisetas").length / productsPerPage
                )}
                onPageChange={(newPage) =>
                  handlePageChange("camisetas", newPage)
                }
              />
            </div>
          )}
        </TabsContent>
      </Tabs>
    </main>
  );
}
