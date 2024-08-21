"use client";

import { AppHeader } from "@/components/app-header";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen">
      <div className="bg-card fixed top-0 left-0 w-full z-50">
        <AppHeader className="max-w-[1122px] container py-4 mx-auto" />
      </div>

      <div className="h-[80px]" />

      <div className="md:container py-2 md:py-4 md:max-w-[1122px] overflow-hidden md:mx-auto">
        {children}
      </div>
    </main>
  );
}
