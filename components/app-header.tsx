"use client";

import { useAppSelector } from "@/lib/redux";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { DetailedHTMLProps, HTMLAttributes } from "react";
import { SearchInput } from "./app-search";
import { Button } from "./ui/button";

type Props = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export function AppHeader({ className, ...props }: Props) {
  const cartLength = useAppSelector((state) => state.cart.totalQuantity);
  const router = useRouter();

  return (
    <div
      {...props}
      className={cn("w-full flex justify-between items-center", className)}
    >
      <Image
        onClick={() => router.replace("/")}
        src="/img/icon.png"
        width={200}
        height={200}
        alt="Tablu store logo"
        className="w-14 h-auto cursor-pointer"
      />

      <div className="flex items-center md:gap-4">
        <div className="hidden md:block">
          <SearchInput
            className=" min-w-[320px]"
            placeholder="Procurando por algo específico?"
          />
        </div>

        <div className="md:hidden">
          <Button className="-mt-2" variant="ghost">
            <Search />
          </Button>
        </div>

        <div
          onClick={() => router.push("/cart")}
          className="cursor-pointer h-10 relative"
        >
          <Image
            src="/icons/shopping-bag.svg"
            width={24}
            height={24}
            alt="Tablu store logo"
            className="w-8 flex-shrink-0"
          />
          {cartLength > 0 && (
            <div className="absolute -right-1.5 bottom-0.5 bg-destructive flex items-center justify-center text-xs text-card w-5 h-5 rounded-full">
              <p>{cartLength}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
