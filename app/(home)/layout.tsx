"use client";

import { AppHeader } from "@/components/app-header";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen">
      <div className="bg-card ">
        <AppHeader className="max-w-screen-lg container py-4 mx-auto" />
      </div>

      <div className="container py-4 max-w-screen-lg mx-auto">{children}</div>
    </main>
  );
}
