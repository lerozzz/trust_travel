import { default as image3 } from "@public/main/Egypt.png";
import { default as image2 } from "@public/main/Thailand.png";
import { default as image1 } from "@public/main/Turkey.png";
import { StaticImageData } from "next/image";

export const cards: Card[] = [
  { country: "Иордания", photo: image1 },
  { country: "ОАЭ", photo: image2 },
  { country: "Тайланд", photo: image3 },
];

export type Card = {
  country: string;
  city: string;
  price: number;
  countPeople: number;
  photo: string | StaticImageData;
};
