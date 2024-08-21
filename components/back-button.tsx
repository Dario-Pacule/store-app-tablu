"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { ComponentProps } from "react";
import { Button } from "./ui/button";

type Props = ComponentProps<typeof Button>;

export function BackButton({ ...props }: Props) {
  const router = useRouter();

  return (
    <div className="w-full text-muted-foreground">
      <Button {...props} onClick={() => router.back()} variant="ghost">
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
