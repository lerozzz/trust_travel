import Image from "next/image";
import { FC } from "react";
import styles from "./Card.module.scss";
import type { Card as CardType } from "./CardInfo";

const Card: FC<CardType> = ({ country, photo }) => {
  return (
    <div className={styles.card}>
      <div className={styles.image__wrapper}>
        <Image
          src={photo}
          alt={country}
          objectFit="cover"
          className={styles.image}
        />
        <p className={styles.country}>{country}</p>
      </div>
    </div>
  );
};

export default Card;
