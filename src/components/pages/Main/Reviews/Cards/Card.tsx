import Image from "next/image";
import { FC } from "react";
import type { Card as CardType } from "../Cards/CardInfo";
import styles from "./Card.module.scss";

const Card: FC<CardType> = ({
  image,
  geolocation,
  name,
  starsCount,
  description,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.decoration} />
      <div className={styles.image__wrapper}>
        <Image
          src={image}
          alt={geolocation}
          objectFit="cover"
          className={styles.image}
          fill
        />
      </div>
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.geolocation}>{geolocation}</p>
      <div className={styles.description}>{description}</div>
      <div className={styles.rating_wrapper}>
        <hr className={styles.line_division} />
        <div className={styles.rating_description}>
          <span className={styles.review}>Оценка: </span>
          <div className={styles.stars}>
            {"★".repeat(starsCount) + "☆".repeat(5 - starsCount)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
