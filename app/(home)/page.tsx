"use client";

import { AppEmpty } from "@/components/app-empty";
import ProductLoader from "@/components/loader/product-loader";
import { ProductCard } from "@/components/product-card";
import { ProductCategories } from "@/components/product-categories";
import { ProductPagination } from "@/components/product-pagination";
import { SortBy } from "@/components/sort-by";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { useGetProducts } from "@/services/get-products";
import { Product } from "@/types/product";
import { useEffect, useState } from "react";

export default function Home() {
  const { data, isLoading } = useGetProducts({});
  const [slipperPages, setSlipperPages] = useState(0);
  const [tShirtPages, setTShirtPagesPages] = useState(0);
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

  useEffect(() => {
    const slipperP = Math.ceil(
      getProductsByCategory("sapatilhas").length / productsPerPage
    );

    const tShirtP = Math.ceil(
      getProductsByCategory("camisetas").length / productsPerPage
    );

    setTShirtPagesPages(tShirtP);
    setSlipperPages(slipperP);
  }, [data]);

  return (
    <main>
      <Tabs defaultValue="all">
        <div className="flex w-full justify-between items-center">
          <ProductCategories />
          <SortBy />
        </div>

        {!isLoading && slipperPages == 0 && tShirtPages == 0 && (
          <div className="flex items-center justify-center underline my-12 w-full">
            <AppEmpty />
          </div>
        )}

        {isLoading && (
          <div className="flex items-center justify-center my-12 w-full">
            <ProductLoader />
          </div>
        )}

        <TabsContent value="all">
          {!isLoading && (
            <div className="space-y-8">
              {slipperPages > 0 && (
                <ProductPagination
                  currentPage={currentPages["sapatilhas"]}
                  totalPages={slipperPages}
                  onPageChange={(newPage) =>
                    handlePageChange("sapatilhas", newPage)
                  }
                />
              )}
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

              {tShirtPages > 0 && (
                <ProductPagination
                  currentPage={currentPages["camisetas"]}
                  totalPages={tShirtPages}
                  onPageChange={(newPage) =>
                    handlePageChange("camisetas", newPage)
                  }
                />
              )}
            </div>
          )}
        </TabsContent>

        <TabsContent value="slipper">
          <div className="space-y-8">
            <ProductPagination
              currentPage={currentPages["sapatilhas"]}
              totalPages={slipperPages}
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
          </div>
        </TabsContent>

        <TabsContent value="t-shirt">
          <div className="space-y-8">
            <ProductPagination
              currentPage={currentPages["camisetas"]}
              totalPages={tShirtPages}
              onPageChange={(newPage) => handlePageChange("camisetas", newPage)}
            />

            <div className="grid grid-cols-4 gap-4">
              {getProductPage(
                "camisetas",
                getProductsByCategory("camisetas")
              ).map((product) => (
                <ProductCard data={product} key={product._id} />
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </main>
  );
}
