import { QueryProvider } from "@/providers/query-provider";
import type { Metadata } from "next";
import { Saira } from "next/font/google";
import "./globals.css";

const inter = Saira({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tablu Store",
  description: "FrontEnd Test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-pt">
      <body className={inter.className}>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
