import {
  Color,
  Typography,
  TypographyType,
} from "@/components/common/Typography";
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
        type={TypographyType.CARD_TITLE}
        as="h3"
        className={styles.name}
        color={Color.TEXT_PRIMARY}
      >
        {name}
      </Typography>

      <Typography
        type={TypographyType.CARD_TEXT}
        as="p"
        className={styles.geolocation}
        color={Color.TEXT_SECONDARY}
      >
        {geolocation}
      </Typography>

      <Typography
        type={TypographyType.CARD_TEXT}
        as="p"
        className={styles.description}
        color={Color.TEXT_SECONDARY}
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
            color={Color.TEXT_SECONDARY}
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
