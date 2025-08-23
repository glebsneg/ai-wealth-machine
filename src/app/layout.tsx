import type { Metadata } from "next";
import "@/app/globals.css";
import { rebond, inter, atChrome } from "@/config/fonts";
import clsx from "clsx";
import { DataLayout } from "./layout.data";

export const metadata: Metadata = {
  title: DataLayout.title,
  description: DataLayout.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={clsx("antialiased text-foreground bg-background", inter.variable, rebond.variable, atChrome.variable)}
      >
        {children}
      </body>
    </html>
  );
}
