import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import PropertyProvider from "./context/PropertyProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Marketplace - Libertum",
  description:
    "Exploring freedom, technology, and innovation in our journey to a brighter future.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PropertyProvider>{children}</PropertyProvider>
      </body>
    </html>
  );
}
