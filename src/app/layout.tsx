import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { localeCode } from "@/domain/locale-code";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sample Arboretum project with Next.js App Router",
  description: "Sample Arboretum project with Next.js App Router",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={localeCode}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
