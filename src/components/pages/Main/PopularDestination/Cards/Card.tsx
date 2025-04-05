import location from "@public/main/location.svg";
import Image from "next/image";
import { FC } from "react";
import styles from "./Card.module.scss";
import type { Card as CardType } from "./CardInfo";

const Card: FC<CardType> = ({
  image,
  country,
  city,
  personCount,
  priceFrom,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.image__wrapper}>
        <Image
          src={image}
          alt={country}
          objectFit="cover"
          className={styles.image}
          fill
        />
      </div>
      <Image
        className={styles.location}
        alt="location"
        width={30}
        height={30}
        src={location}
      />
      <p className={styles.country}>{country}</p>
      <h3 className={styles.city}>{city}</h3>
      <div className={styles.priceFrom}>
        Цена от:{" "}
        <span className={styles.priceValue}>
          {priceFrom.toLocaleString()} ₸
        </span>
      </div>
      <div className={styles.personCount}>Гостей: {personCount}</div>
    </div>
  );
};

export default Card;
