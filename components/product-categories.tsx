import { TabsList, TabsTrigger } from "@/components/ui/tabs";

export function ProductCategories() {
  return (
    <nav>
      <TabsList className="w-full md:w-fit border-b-2 md:border-none md:pl-0 justify-between pl-6">
        <TabsTrigger className="hidden md:block" value="all">
          Todos os produtos
        </TabsTrigger>
        <TabsTrigger className="md:hidden" value="all">
          Todos
        </TabsTrigger>
        <TabsTrigger value="t-shirt">Camisetas</TabsTrigger>
        <TabsTrigger value="slipper">SAPATILHAS</TabsTrigger>
      </TabsList>
    </nav>
  );
}
