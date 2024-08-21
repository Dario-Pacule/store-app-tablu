import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Plus } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";

export function ProductCard() {
  return (
    <div
      style={{
        filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1))",
      }}
      className="bg-card flex-shrink-0 rounded-xl w-full overflow-hidden"
    >
      <div className="bg-secondary">
        <Image
          alt="product image"
          src=""
          width={256}
          height={300}
          className="h-full"
        />
      </div>
      <div className="flex flex-col gap-2">
        <ScrollArea className="w-full whitespace-nowrap pt-3 px-3">
          <ul className="flex gap-3">
            {new Array(6).fill("").map((_, i) => (
              <li
                key={i}
                className="bg-secondary flex-shrink-0 w-[50px] h-[45px] rounded-sm overflow-hidden"
              >
                <Image alt="product image" src="" width={50} height={60} />
              </li>
            ))}
          </ul>
          <ScrollBar className="h-2" orientation="horizontal" />
        </ScrollArea>

        <p className="text-lg px-3">Nike Court Vision</p>

        <div className="flex w-full">
          <div className="flex items-center w-full ml-3 mr-2 border-t-2 border-background">
            <p className="font-bold text-lg">12000,00 MT</p>
          </div>
          <Button className=" h-[49px] w-[59px] rounded-none">
            <Plus size={24} />
          </Button>
        </div>
      </div>
    </div>
  );
}
