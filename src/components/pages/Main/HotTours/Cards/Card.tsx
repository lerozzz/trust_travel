import {
  Color,
  Typography,
  TypographyType,
} from "@/components/common/Typography";
import cn from "classnames";
import Image from "next/image";
import { FC } from "react";
import styles from "./Card.module.scss";
import type { Card as CardType } from "./data";

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
        <Image src={image} alt={hotelName} className={styles.image} fill />
      </div>
      <Typography
        type={TypographyType.CARD_TEXT}
        as="p"
        className={styles.geolocation}
        color={Color.TEXT_SECONDARY}
      >
        {geolocation}
      </Typography>

      <Typography
        type={TypographyType.CARD_TITLE}
        as="h3"
        className={styles.hotelName}
        color={Color.TEXT_PRIMARY}
      >
        {hotelName}
      </Typography>

      <div className={styles.stars}>
        {"★".repeat(starsCount) + "☆".repeat(5 - starsCount)}
      </div>

      <Typography
        type={TypographyType.CARD_TEXT}
        as="div"
        className={styles.date}
        color={Color.TEXT_PRIMARY}
      >
        {date.from.toLocaleDateString()} — {date.to.toLocaleDateString()}
      </Typography>

      <Typography
        type={TypographyType.CARD_TEXT}
        as="div"
        className={styles.personCount}
        color={Color.TEXT_PRIMARY}
      >
        Гостей: {personCount}
      </Typography>

      <hr className={styles.line_division} />

      <Typography
        type={TypographyType.CARD_TEXT}
        as="div"
        className={styles.priceFrom}
        color={Color.TEXT_PRIMARY}
      >
        Цена от:{" "}
        <span className={styles.priceValue}>
          {priceFrom.toLocaleString()} ₸
        </span>
      </Typography>
    </div>
  );
};

export default Card;
