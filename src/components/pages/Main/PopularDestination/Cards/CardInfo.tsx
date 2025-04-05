import { default as image3 } from "@public/main/Egypt.png";
import { default as image2 } from "@public/main/Thailand.png";
import { default as image1 } from "@public/main/Turkey.png";
import { StaticImageData } from "next/image";

export const cardsList: Card[] = [
  {
    city: "Анкара",
    personCount: 2,
    country: "Турция",
    image: image1,
    priceFrom: 500,
  },
  {
    city: "Пхукет",
    personCount: 3,
    country: "Тайланд",
    image: image2,
    priceFrom: 400,
  },
  {
    city: "Шарм-эль-шейх",
    personCount: 2,
    country: "Египет",
    image: image3,
    priceFrom: 400,
  },
];

export type Card = {
  country: string;
  city: string;
  priceFrom: number;
  personCount: number;
  image: string | StaticImageData;
};
