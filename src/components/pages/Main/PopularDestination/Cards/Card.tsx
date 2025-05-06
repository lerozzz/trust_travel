import { Typography, TypographyType } from "@/components/common/Typography";
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
       <Typography
        type={TypographyType.DESCRIPTION}
        as="p"
        className={styles.country}
      >
        {country}
      </Typography>
      <Typography
        type={TypographyType.TITLE}
        as="h3"
        className={styles.city}
      >
        {city}
      </Typography>
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
      <Typography
        type={TypographyType.DESCRIPTION}
        as="div"
        className={styles.personCount}
      >
        Гостей: {personCount}
        </Typography>
    </div>
  );
};

export default Card;
