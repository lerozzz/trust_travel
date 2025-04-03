import Image from "next/image";
import { FC } from "react";
import styles from "./Card.module.scss";
import type { Card as CardType } from "./CardInfo";

const Card: FC<CardProps> = (props) => {
  const { country, photo } = props;
  return (
    <div className={styles.card_wrapper}>
      <Image className={styles.card} alt="card_1" src={photo} />
      <div className={styles.card_text_wrapper}>
        <div className={styles.location_wrapper}>
          <p className={styles.country}>{country}</p>
        </div>
      </div>
    </div>
  );
};
export default Card;

export type CardProps = CardType;
