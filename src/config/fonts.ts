import { Cabin, Inter, Montserrat, Playfair_Display, Rubik } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "900"],
  variable: "--font-inter",
});

export const rebond = Cabin({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-rebond"
});

export const atChrome = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-atChrome"
});

export const pFMarletDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['900'],
  style: ['italic'],
  variable: '--font-pFMarletDisplay',
  display: 'swap',
})

export const paralucent = Rubik({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-paralucent"
});
