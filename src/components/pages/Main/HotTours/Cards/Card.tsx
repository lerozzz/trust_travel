import cn from "classnames";
import Image from "next/image";
import { FC } from "react";
import type { Card as CardType } from "../Cards/CardInfo";
import styles from "./Card.module.scss";

const Card: FC<CardType> = ({
  image,
  geolocation,
  hotelName,
  starsCount,
  date,
  personCount,
  priceFrom,
}) => {
  return (
    <div className={styles.card}>
      {/* cn тут не нужен, но надо знать его в работе с scss */}
      <div className={cn(styles.image__wrapper)}>
        <Image
          src={image}
          alt={hotelName}
          objectFit="cover"
          className={styles.image}
          fill
        />
      </div>
      <h3 className={styles.hotelName}>{hotelName}</h3>
      <p className={styles.geolocation}>{geolocation}</p>
      <div className={styles.stars}>
        {"★".repeat(starsCount) + "☆".repeat(5 - starsCount)}
      </div>
      <div className={styles.date}>
        {date.from.toLocaleDateString()} — {date.to.toLocaleDateString()}
      </div>
      <div className={styles.personCount}>Гостей: {personCount}</div>
      <div className={styles.priceFrom}>
        Цена от: {priceFrom.toLocaleString()} ₸
      </div>
    </div>
  );
};

export default Card;

export type CardProps = CardType;
