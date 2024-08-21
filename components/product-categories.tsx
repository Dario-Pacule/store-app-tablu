import { TabsList, TabsTrigger } from "@/components/ui/tabs";

export function ProductCategories() {
  return (
    <nav>
      <TabsList>
        <TabsTrigger value="all">Todos os produtos</TabsTrigger>
        <TabsTrigger value="t-shirt">Camisetas</TabsTrigger>
        <TabsTrigger value="slipper">SAPATILHAS</TabsTrigger>
      </TabsList>
    </nav>
  );
}
