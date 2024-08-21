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

  const [isSmallScreen, setIsSmallScreen] = useState(false);
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
    return isSmallScreen
      ? products
      : products.slice(
          (currentPage - 1) * productsPerPage,
          currentPage * productsPerPage
        );
  };

  useEffect(() => {
    const updateScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 640);
    };

    window.addEventListener("resize", updateScreenSize);
    updateScreenSize();

    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

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
        <div className="flex flex-col-reverse mb-4 md:flex-row w-full md:justify-between md:items-center">
          <ProductCategories />
          <div className="ml-auto">
            <SortBy />
          </div>
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

        <TabsContent className="px-2" value="all">
          {!isLoading && (
            <div className="space-y-8">
              {!isSmallScreen && slipperPages > 0 && (
                <ProductPagination
                  currentPage={currentPages["sapatilhas"]}
                  totalPages={slipperPages}
                  onPageChange={(newPage) =>
                    handlePageChange("sapatilhas", newPage)
                  }
                />
              )}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                {getProductPage(
                  "sapatilhas",
                  getProductsByCategory("sapatilhas")
                ).map((product) => (
                  <ProductCard data={product} key={product._id} />
                ))}
              </div>

              <div className="grid grid-cols-2 md:lg:grid-cols-3 lg:grid-cols-4 gap-6">
                {getProductPage(
                  "camisetas",
                  getProductsByCategory("camisetas")
                ).map((product) => (
                  <ProductCard data={product} key={product._id} />
                ))}
              </div>

              {!isSmallScreen && tShirtPages > 0 && (
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

        <TabsContent className="px-2" value="slipper">
          <div className="space-y-8">
            {!isSmallScreen && (
              <ProductPagination
                currentPage={currentPages["sapatilhas"]}
                totalPages={slipperPages}
                onPageChange={(newPage) =>
                  handlePageChange("sapatilhas", newPage)
                }
              />
            )}
            <div className="grid grid-cols-2 md:lg:grid-cols-3 lg:grid-cols-4 gap-6">
              {getProductPage(
                "sapatilhas",
                getProductsByCategory("sapatilhas")
              ).map((product) => (
                <ProductCard data={product} key={product._id} />
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent className="px-2" value="t-shirt">
          <div className="space-y-8">
            {!isSmallScreen && (
              <ProductPagination
                currentPage={currentPages["camisetas"]}
                totalPages={tShirtPages}
                onPageChange={(newPage) =>
                  handlePageChange("camisetas", newPage)
                }
              />
            )}

            <div className="grid grid-cols-2 md:lg:grid-cols-3 lg:grid-cols-4 gap-6">
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
