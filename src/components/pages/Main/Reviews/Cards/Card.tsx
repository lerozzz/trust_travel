import { Typography, TypographyType } from "@/components/common/Typography";
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

      <Typography
        type={TypographyType.TITLE}
        as="h3"
        className={styles.name}
      >
        {name}
      </Typography>
      
      <Typography
        type={TypographyType.CARD_TEXT}
        as="p"
        className={styles.geolocation}
      >
       {geolocation}
      </Typography>

      <Typography
        type={TypographyType.CARD_TEXT}
        as="p"
        className={styles.description}
      >
       {description}
      </Typography>
      
      <div className={styles.rating_wrapper}>
        <hr className={styles.line_division} />
        <div className={styles.rating_description}>

        <Typography
        type={TypographyType.CARD_TEXT}
        as="span"
        className={styles.review}
      >
            Оценка: 
          </Typography>
          
          <div className={styles.stars}>
            {"★".repeat(starsCount) + "☆".repeat(5 - starsCount)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
