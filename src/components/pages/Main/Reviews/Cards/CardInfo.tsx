import { default as all1 } from "@public/main/reviews1.png";
import { default as all2 } from "@public/main/reviews2.png";
import { default as all3 } from "@public/main/reviews3.jpg";
import { StaticImageData } from "next/image";

export type Card = {
  image: string | StaticImageData;
  geolocation: string;
  name: string;
  starsCount: 1 | 2 | 3 | 4 | 5;
  description: string;
};


export const cardsList: Card[] = [
  {
    image: all1,
    geolocation: "Турция, Сиде, Чолаклы",
    name: "Polina",
    starsCount: 4,
    description: 'Турция, Сиде, Чолаклы оставили незабываемые впечатления! ☀️🌴 Отличный отель, приветливый персонал и прекрасное море сделали наш отдых незабываемым.'
  },
  {
    image: all2,
    geolocation: "Египет, Шарм-Эль-Шейх",
    name: "Alina",
    starsCount: 5,
    description:'Шарм-эль-Шейх – сказка! ✨ Прекрасный отель, изумительное Красное море, потрясающие коралловые рифы! Trust Travel организовал все на высшем уровне. Несколько минусов были, но общая атмосфера отдыха все компенсировала. Рекомендую! 👍'
  },
  {
    image: all3,
    geolocation: "Тайланд, о.Пхукет",
    name: "Tamila",
    starsCount: 3,
    description:'Пхукет – рай на земле! 😍 Белоснежные пляжи, бирюзовая вода, вкусная еда и потрясающие закаты. Отель был отличный, экскурсии - интересные. Несколько моментов можно было бы улучшить, но в целом - отдых супер! Спасибо Trust Travel! '
  },
];

