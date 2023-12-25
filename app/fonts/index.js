import localFont from "next/font/local";
import { Inter } from "next/font/google";
import { Montserrat } from "next/font/google";
import { Prata } from "next/font/google";

export const sfPro = localFont({
  src: "./SF-Pro-Display-Medium.otf",
  variable: "--font-sf",
});

export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "cyrillic"],
});

export const prata = Prata({
  variable: "--font-prata",
  subsets: ["latin", "cyrillic"],
  weight: '400',
});
