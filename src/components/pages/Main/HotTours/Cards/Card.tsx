import location from "@public/main/location.svg";
import Image from "next/image";
import { FC } from "react";
import type { Card as CardType } from ".";
import styles from "./Card.module.scss";

const Card: FC<CardProps> = (props) => {
  const { country, city, price, countPeople, photo } = props;
  return (
    <div className={styles.card_wrapper}>
      <Image
        className={styles.card}
        alt="card_1"
        src={photo}
      />
      
      <div className={styles.card_text_wrapper}>
        <div className={styles.location_wrapper}>
          <Image
            className={styles.location}
            alt="location"
            width={30}
            height={30}
            src={location}
          />
          <p className={styles.country}>{country}</p>
        </div>
        <p className={styles.city}>{city}</p>
        <div className={styles.price_countPeople_wrapper}>
          <div className={styles.price_wrapper}>
            <p className={styles.country}>Цена:</p>
            <p className={styles.country}>{price}</p>
          </div>
          <div className={styles.countPeople_wrapper}>
            <p className={styles.country}>Вззрослых:</p>
            <p className={styles.country}>{countPeople}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;

export type CardProps = CardType;
