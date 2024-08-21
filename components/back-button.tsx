"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

export function BackButton() {
  const router = useRouter();

  return (
    <div className="w-full text-muted-foreground">
      <Button onClick={() => router.back()} variant="ghost">
        <Image
          src="/icons/back.svg"
          width={24}
          height={24}
          alt="Tablu store logo"
          className="mr-2 flex-shrink-0"
        />
        <p>Voltar</p>
      </Button>
    </div>
  );
}
