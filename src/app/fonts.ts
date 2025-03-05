import { Manrope, PT_Serif } from "next/font/google";

export const manrope = Manrope({
  subsets: ["cyrillic", "latin"],
  variable: "--font-monrepo",
});

export const pt_serif = PT_Serif({
  variable: "--font-pt",
  weight: ["400", "700"],
  subsets: ["cyrillic", "latin"],
});
