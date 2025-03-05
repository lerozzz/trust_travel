import { default as image3 } from "@public/main/Egypt.png";
import { default as image2 } from "@public/main/Thailand.png";
import { default as image1 } from "@public/main/Turkey.png";
import { StaticImageData } from "next/image";

export const cards: Card[] = [
  {
    city: "Анкара",
    countPeople: 2,
    country: "Турция",
    photo: image1,
    price: 500,
  },
  {
    city: "Пхукет",
    countPeople: 3,
    country: "Тайланд",
    photo: image2,
    price: 400,
  },
  {
    city: "Шарм-эль-шейх",
    countPeople: 2,
    country: "Египет",
    photo: image3,
    price: 400,
  },
];

export type Card = {
  country: string;
  city: string;
  price: number;
  countPeople: number;
  photo: string | StaticImageData;
};
