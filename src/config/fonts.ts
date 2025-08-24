import { Cabin, Inter, Montserrat, Playfair_Display } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  weight: ["900"],
  variable: "--font-inter",
});

export const rebond = Cabin({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-cabin"
});

export const atChrome = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat"
});

export const pFMarletDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['900'],
  style: ['italic'],
  variable: '--font-playfair',
  display: 'swap',
})