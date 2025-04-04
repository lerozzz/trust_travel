import { default as image1 } from "@public/main/countries1.png";
import { default as image2 } from "@public/main/countries2.png";
import { default as image3 } from "@public/main/countries3.png";
import { StaticImageData } from "next/image";

export const cards: Card[] = [
  { country: "Иордания", photo: image1 },
  { country: "ОАЭ", photo: image2 },
  { country: "Тайланд", photo: image3 },
];

export type Card = {
  country: string;
  photo: string | StaticImageData;
};
