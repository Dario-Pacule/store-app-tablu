import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function ProductCategories() {
  return (
    <nav>
      <Tabs defaultValue="all" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="all">Todos os produtos</TabsTrigger>
          <TabsTrigger value="t-shirt">Camisetas</TabsTrigger>
          <TabsTrigger value="slipper">SAPATILHAS</TabsTrigger>
        </TabsList>
        <TabsContent value="all">Lista de todos o produtos</TabsContent>
        <TabsContent value="t-shirt">Lista de camisetas.</TabsContent>
        <TabsContent value="slipper">Lista de sapatos.</TabsContent>
      </Tabs>
    </nav>
  );
}
