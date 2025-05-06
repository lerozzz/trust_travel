import { Typography, TypographyType } from "@/components/common/Typography";
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
      <Typography
        type={TypographyType.DESCRIPTION}
        as="p"
        className={styles.geolocation}
      >
        {geolocation}
      </Typography>

      <Typography
        type={TypographyType.TITLE}
        as="h3"
        className={styles.hotelName}
      >
        {hotelName}
      </Typography>
      
      <div className={styles.stars}>
        {"★".repeat(starsCount) + "☆".repeat(5 - starsCount)}
      </div>

      <Typography
        type={TypographyType.DESCRIPTION}
        as="div"
        className={styles.date}
      >
        {date.from.toLocaleDateString()} — {date.to.toLocaleDateString()}
      </Typography>
      
      <Typography
        type={TypographyType.DESCRIPTION}
        as="div"
        className={styles.personCount}
      >
        Гостей: {personCount}
      </Typography>
      
      <hr className={styles.line_division} />

      <Typography
        type={TypographyType.DESCRIPTION}
        as="div"
        className={styles.priceFrom}
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
