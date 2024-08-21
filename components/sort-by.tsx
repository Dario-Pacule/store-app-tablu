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
        <div className="flex gap-3 text-sm items-center">
          <p>Organizar por</p> <ChevronDown />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Novidades</DropdownMenuItem>
        <DropdownMenuItem>Preço: Maior - menor</DropdownMenuItem>
        <DropdownMenuItem>Preço: Menor - maior</DropdownMenuItem>
        <DropdownMenuItem>Mais vendidos</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
