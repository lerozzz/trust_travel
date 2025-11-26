import { Typography, TypographyType } from "@/components/common/Typography";
import Image from "next/image";
import { FC } from "react";
import styles from "./Card.module.scss";
import type { Card as CardType } from "./CardInfo";

const Card: FC<CardType> = ({ country, photo }) => {
  return (
    <div className={styles.card}>
      <div className={styles.image__wrapper}>
        <Image src={photo} alt={country} className={styles.image} />
        <Typography
          type={TypographyType.TITLE}
          as="h1"
          className={styles.country}
        >
          {country}
        </Typography>
      </div>
    </div>
  );
};

export default Card;
