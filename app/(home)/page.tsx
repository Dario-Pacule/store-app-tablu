import { ProductCard } from "@/components/product-card";
import { ProductCategories } from "@/components/product-categories";
import { SortBy } from "@/components/sort-by";
import { Tabs, TabsContent } from "@/components/ui/tabs";

export default function Home() {
  return (
    <main>
      <Tabs defaultValue="all">
        <div className="flex w-full justify-between items-center">
          <ProductCategories />
          <SortBy />
        </div>

        <TabsContent className="grid grid-cols-4 gap-4" value="all">
          {new Array(8).fill("").map((_, i) => (
            <ProductCard key={i} />
          ))}
        </TabsContent>
        <TabsContent value="t-shirt">Lista de camisetas.</TabsContent>
        <TabsContent value="slipper">Lista de sapatos.</TabsContent>
      </Tabs>
    </main>
  );
}
