import {
  Color,
  Typography,
  TypographyType,
} from "@/components/common/Typography";
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
      <div className={styles.layout}>
        <div className={styles.countryWrapper}>
          <Image
            className={styles.location}
            alt="location"
            width={30}
            height={30}
            src={location}
          />
          <Typography
            type={TypographyType.CARD_TEXT}
            as="p"
            className={styles.country}
            color={Color.BACKGROUND}
          >
            {country}
          </Typography>
        </div>
        <Typography
          type={TypographyType.TITLE}
          as="h3"
          className={styles.city}
          color={Color.BACKGROUND}
        >
          {city}
        </Typography>

        <div className={styles.priceCountWrapper}>
          <Typography
            type={TypographyType.CARD_TEXT}
            as="div"
            className={styles.priceFrom}
            color={Color.BACKGROUND}
          >
            Цена от:{" "}
            <span className={styles.priceValue}>
              {priceFrom.toLocaleString()} ₸
            </span>
          </Typography>
          <Typography
            type={TypographyType.CARD_TEXT}
            as="div"
            className={styles.personCount}
            color={Color.BACKGROUND}
          >
            Гостей: {personCount}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Card;
