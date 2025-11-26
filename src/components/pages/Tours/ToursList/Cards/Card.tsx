import {
  Color,
  Typography,
  TypographyType,
} from "@/components/common/Typography";
import { default as location } from "@public/main/location.svg";
import { default as nights_count } from "@public/main/nights.svg";
import { default as person_count } from "@public/main/person_count.svg";
import cn from "classnames";
import Image from "next/image";
import { FC } from "react";
import { Tour } from "../../(model)/type";
import styles from "./Card.module.scss";

const Card: FC<Tour> = ({
  country,
  startNight,
  rating,
  price,
  adults,
  hotelName,
  city,
  image,
  description,
}) => {
  return (
    <div className={styles.main_wrapper}>
      <div className={cn(styles.image__wrapper)}>
        <Image src={image} alt={hotelName} className={styles.image} fill />
      </div>

      <div className={styles.card_information}>
        <div className={styles.icon_and_text_wrapper}>
          <Image alt="location" width={21} height={21} src={location} />
          <Typography
            type={TypographyType.CARD_TEXT}
            as="p"
            color={Color.TEXT_SECONDARY}
          >
            {country}, {city}
          </Typography>
        </div>
        <Typography
          type={TypographyType.CARD_TITLE}
          as="h3"
          color={Color.TEXT_PRIMARY}
        >
          {hotelName}
        </Typography>

        <div className={styles.icon_and_text_wrapper}>
          <div className={styles.icon_and_text_wrapper}>
            <Image alt="guests" width={21} height={21} src={person_count} />

            <Typography
              type={TypographyType.CARD_TEXT}
              as="div"
              color={Color.TEXT_PRIMARY}
            >
              {adults} взрослых
            </Typography>
          </div>

          <div className={styles.icon_and_text_wrapper}>
            <Image alt="nights" width={21} height={21} src={nights_count} />

            <Typography
              type={TypographyType.CARD_TEXT}
              as="div"
              color={Color.TEXT_PRIMARY}
            >
              {startNight} ночей
            </Typography>
          </div>
        </div>

        <Typography
          type={TypographyType.CARD_TEXT}
          as="div"
          color={Color.TEXT_PRIMARY}
        >
          {description}
        </Typography>

        <Typography type={TypographyType.OVERTITLE} color={Color.STARS}>
          {"★".repeat(rating) + "☆".repeat(5 - rating)}
        </Typography>

        <hr className={styles.line_division} />

        <Typography
          type={TypographyType.CARD_TEXT}
          as="div"
          color={Color.TEXT_PRIMARY}
        >
          Цена от:{" "}
          <span className={styles.priceValue}>{price.toLocaleString()} ₸</span>
        </Typography>
      </div>
    </div>
  );
};

export default Card;
