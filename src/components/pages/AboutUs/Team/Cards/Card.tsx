import {
  Color,
  Typography,
  TypographyType,
} from "@/components/common/Typography";
import Image from "next/image";
import { FC } from "react";
import styles from "./Card.module.scss";
import { socialLinks, type Card as CardType } from "./CardInfo";

const Card: FC<CardType> = ({ fullName, photo, position }) => {
  return (
    <div className={styles.card}>
      <div className={styles.image__wrapper}>
        <Image src={photo} alt={fullName} className={styles.image} />
        <Typography
          type={TypographyType.CARD_TITLE_SECONDARY}
          as="p"
          className={styles.full_name}
          color={Color.TEXT_PRIMARY}
        >
          {fullName}
        </Typography>
        <Typography
          type={TypographyType.CARD_TEXT}
          as="p"
          className={styles.position}
          color={Color.TEXT_SECONDARY}
        >
          {position}
        </Typography>
      </div>
      <div className={styles.social_net_icons}>
        {socialLinks.map(({ alt, src }, index) => (
          <Image key={index} width={24} alt={alt} src={src} height={24} />
        ))}
      </div>
    </div>
  );
};

export default Card;
