import { Cabin, Inter, Montserrat } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  weight: ["900"],
  variable: "--font-inter",
});

export const rebond = Cabin({
  subsets: ["latin"],
  weight: [],
  variable: "--font-cabin"
});

export const atChrome = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-montserrat"
});