import { default as all1 } from "@public/main/all1.png";
import { default as all2 } from "@public/main/all2.png";
import { default as all3 } from "@public/main/all3.png";
import { StaticImageData } from "next/image";

export type Card = {
  image: string | StaticImageData;
  geolocation: string;
  hotelName: string;
  starsCount: 1 | 2 | 3 | 4 | 5;
  date: {
    from: Date;
    to: Date;
  };
  personCount: number;
  priceFrom: number;
};

export const cardsList: Card[] = [
  {
    image: all1,
    geolocation: "Турция, Сиде, Чолаклы",
    hotelName: "KAMELYA SELIN HOTEL",
    starsCount: 4,
    date: { from: new Date("2025-04-12"), to: new Date("2025-04-18") },
    personCount: 2,
    priceFrom: 20000,
  },
  {
    image: all2,
    geolocation: "Египет, Шарм-Эль-Шейх",
    hotelName: "RIXOS PREMIUM SEAGATE",
    starsCount: 5,
    date: { from: new Date("2025-04-15"), to: new Date("2025-04-20") },
    personCount: 1,
    priceFrom: 25000,
  },
  {
    image: all3,
    geolocation: "Тайланд, о.Пхукет",
    hotelName: "GRAND KATA VIP",
    starsCount: 3,
    date: { from: new Date("2025-04-18"), to: new Date("2025-04-22") },
    personCount: 3,
    priceFrom: 18000,
  },
];

export const astanaCards: Card[] = [
  {
    image: "/image/astana1.jpg",
    geolocation: "Астана",
    hotelName: "Астана Гранд Отель",
    starsCount: 5,
    date: { from: new Date("2025-05-10"), to: new Date("2025-05-15") },
    personCount: 2,
    priceFrom: 30000,
  },
  {
    image: "/image/astana2.jpg",
    geolocation: "Астана",
    hotelName: "Байтерек Отель",
    starsCount: 4,
    date: { from: new Date("2025-06-01"), to: new Date("2025-06-07") },
    personCount: 1,
    priceFrom: 22000,
  },
  {
    image: "/image/astana3.jpg",
    geolocation: "Астана",
    hotelName: "Нур-Султан Плаза",
    starsCount: 3,
    date: { from: new Date("2025-07-05"), to: new Date("2025-07-10") },
    personCount: 3,
    priceFrom: 18000,
  },
];

export const almatyCards: Card[] = [
  {
    image: "/image/almaty1.jpg",
    geolocation: "Алматы",
    hotelName: "Алматы Премиум",
    starsCount: 5,
    date: { from: new Date("2025-05-12"), to: new Date("2025-05-17") },
    personCount: 2,
    priceFrom: 35000,
  },
  {
    image: "/image/almaty2.jpg",
    geolocation: "Алматы",
    hotelName: "Горный Отель",
    starsCount: 4,
    date: { from: new Date("2025-06-03"), to: new Date("2025-06-09") },
    personCount: 1,
    priceFrom: 24000,
  },
  {
    image: "/image/almaty2.jpg",
    geolocation: "Алматы",
    hotelName: "Горный Отель",
    starsCount: 4,
    date: { from: new Date("2025-06-03"), to: new Date("2025-06-09") },
    personCount: 1,
    priceFrom: 24000,
  },
];

export const karagandaCards: Card[] = [
  {
    image: "/image/karaganda1.jpg",
    geolocation: "Караганда",
    hotelName: "Караганда Гранд Отель",
    starsCount: 4,
    date: { from: new Date("2025-05-15"), to: new Date("2025-05-20") },
    personCount: 2,
    priceFrom: 27000,
  },
  {
    image: "/image/karaganda2.jpg",
    geolocation: "Караганда",
    hotelName: "Шахтер Плаза",
    starsCount: 3,
    date: { from: new Date("2025-06-05"), to: new Date("2025-06-10") },
    personCount: 1,
    priceFrom: 20000,
  },
  {
    image: "/image/karaganda3.jpg",
    geolocation: "Караганда",
    hotelName: "Металлург Отель",
    starsCount: 5,
    date: { from: new Date("2025-07-10"), to: new Date("2025-07-15") },
    personCount: 3,
    priceFrom: 35000,
  },
];

export const shymkentCards: Card[] = [
  {
    image: "/image/shymkent1.jpg",
    geolocation: "Шымкент",
    hotelName: "Шымкент Палас",
    starsCount: 5,
    date: { from: new Date("2025-05-12"), to: new Date("2025-05-18") },
    personCount: 2,
    priceFrom: 40000,
  },
  {
    image: "/image/shymkent2.jpg",
    geolocation: "Шымкент",
    hotelName: "Туран Отель",
    starsCount: 4,
    date: { from: new Date("2025-06-03"), to: new Date("2025-06-08") },
    personCount: 1,
    priceFrom: 25000,
  },
  {
    image: "/image/shymkent3.jpg",
    geolocation: "Шымкент",
    hotelName: "Гранд Шымкент",
    starsCount: 3,
    date: { from: new Date("2025-07-15"), to: new Date("2025-07-20") },
    personCount: 3,
    priceFrom: 18000,
  },
];

export const aktauCards: Card[] = [
  {
    image: "/image/aktau1.jpg",
    geolocation: "Актау",
    hotelName: "Актау Резорт",
    starsCount: 5,
    date: { from: new Date("2025-05-20"), to: new Date("2025-05-25") },
    personCount: 2,
    priceFrom: 50000,
  },
  {
    image: "/image/aktau2.jpg",
    geolocation: "Актау",
    hotelName: "Каспий Отель",
    starsCount: 4,
    date: { from: new Date("2025-06-10"), to: new Date("2025-06-15") },
    personCount: 1,
    priceFrom: 30000,
  },
  {
    image: "/image/aktau3.jpg",
    geolocation: "Актау",
    hotelName: "Марина Палас",
    starsCount: 3,
    date: { from: new Date("2025-07-05"), to: new Date("2025-07-10") },
    personCount: 3,
    priceFrom: 25000,
  },
];
