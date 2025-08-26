import type { Metadata } from "next";
import "@/app/globals.css";
import { rebond, inter, atChrome, pFMarletDisplay, paralucent } from "@/config/fonts";
import clsx from "clsx";
import { DataLayout } from "./layout.data";

export const metadata: Metadata = {
  title: DataLayout.title,
  description: DataLayout.description,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const lastName: Readonly<string> = "Fedotof";

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        data-last-name={lastName}
        className={clsx("antialiased text-foreground bg-background", inter.variable, rebond.variable, atChrome.variable, pFMarletDisplay.variable, paralucent.variable)}
      >
        {children}
      </body>
    </html>
  );
}

