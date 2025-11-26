import { default as egypt } from "@public/main/tours_egypt.png";
import { default as georgia } from "@public/main/tours_georgia.png";
import { default as thailand } from "@public/main/tours_thailand.png";
import { default as turkye } from "@public/main/tours_turkye.png";
import { default as uae } from "@public/main/tours_uae.png";
import { StaticImageData } from "next/image";

export type Card = {
  image: string | StaticImageData;
  geolocation: string;
  hotelName: string;
  personCount: number;
  nights: number;
  description: string;
  starsCount: 1 | 2 | 3 | 4 | 5;
  priceFrom: number;
};

export const cardsList: Card[] = [
  {
    image: thailand,
    geolocation: "Тайланд, о.Пхукет",
    hotelName: "GRAND KATA VIP",
    personCount: 2,
    nights: 7,
    description:
      "Городской отель расположен в центре местечка Карон через дорогу от песчаного пляжа. Комфортные, со вкусом оформленные номера, хороший сервис, гостеприимный персонал. ",
    starsCount: 5,
    priceFrom: 286000,
  },
  {
    image: turkye,
    geolocation: "Турция, Сиде",
    hotelName: "KAMELYA SELIN HOTEL",
    personCount: 2,
    nights: 10,
    description:
      "Живописный уголок Сиде, из окон отеля открывается вид на озеро или пышную рощу на берегу реки. До собственного пляжа — 750 м.",
    starsCount: 5,
    priceFrom: 400000,
  },
  {
    image: egypt,
    geolocation: "Египет, Шарм-Эль-Шейх",
    hotelName: "RIXOS PREMIUM SEAGATE",
    personCount: 2,
    nights: 12,
    description:
      "Роскошный отель в форме полумесяца, расположенный в красивой охраняемой зоне в Набк Бей. Рекомендуется для семейного отдыха.",
    starsCount: 5,
    priceFrom: 380000,
  },
  {
    image: uae,
    geolocation: "ОАЭ, Дубаи",
    hotelName: "ATLANTIS THE PALM",
    personCount: 2,
    nights: 6,
    description:
      "Большой современный курортный комплекс на искусственном острове Пальма-Джумейра с самым большим в мире аквапарком и океанариумом. ",
    starsCount: 5,
    priceFrom: 500000,
  },
  {
    image: georgia,
    geolocation: "Грузия, Тбилиси",
    hotelName: "PINE ASTORIA TBILISI",
    personCount: 2,
    nights: 7,
    description:
      "Отель в городе Тбилиси, который предлагает уникальное сочетание комфорта, стиля и удобства. Номера полной комплектации и с приятным интерьером.  ",
    starsCount: 5,
    priceFrom: 480000,
  },
];
