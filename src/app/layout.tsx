import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import clsx from 'clsx'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abdul Aziz Rahim Food Stuff Trading",
  description: "From Ocean to Plate, Field to Fork",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={clsx(inter.className, "antialiased bg-white")}>{children}</body>
    </html>
  );
}
