import { default as inna } from "@public/main/inna.png";
import instagram from "@public/main/instagram_about_us.svg";
import { default as marina } from "@public/main/marina.png";
import telegram from "@public/main/telegram_about_us.svg";
import { default as valeria } from "@public/main/valeria.png";
import whats_app from "@public/main/whats_app_about_us.svg";
import { StaticImageData } from "next/image";

export type Card = {
  photo: string | StaticImageData;
  fullName: string;
  position: string;
};

export const cards: Card[] = [
  {
    fullName: "Кузнецова Инна Александровна",
    photo: inna,
    position: "Основатель и турагент",
  },
  {
    fullName: "Курбанова Марина Александровна",
    photo: marina,
    position: "Основатель и турагент",
  },
  {
    fullName: "Кузнецова Валерия Андреевна",
    photo: valeria,
    position: "Маркетолог и разработчик",
  },
];

export const socialLinks = [
  { alt: "instagram", src: instagram },
  { alt: "telegram", src: telegram },
  { alt: "mail", src: whats_app },
];
