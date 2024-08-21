"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

export function SortBy() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger onFocus={(e) => e.preventDefault()}>
        <div className="flex bg-card md:bg-background py-2 border-2 md:border-none mr-3 md:mr-0 px-6 md:px-0 rounded-full gap-3 text-sm items-center">
          <p>Organizar por</p> <ChevronDown className="size-4 md:size-6" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-card">
        <DropdownMenuItem>Novidades</DropdownMenuItem>
        <DropdownMenuItem>Preço: Maior - menor</DropdownMenuItem>
        <DropdownMenuItem>Preço: Menor - maior</DropdownMenuItem>
        <DropdownMenuItem>Mais vendidos</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
