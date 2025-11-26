import { Button, ButtonType } from "@/components/common/Button";
import {
  Color,
  Typography,
  TypographyType,
} from "@/components/common/Typography";
import { default as tourPackages } from "@public/main/tour_packages.png";
import Image from "next/image";
import Title from "./Title";
import styles from "./index.module.scss";

export const TourPackages = () => {
  return (
    <div className={styles.wrapper}>
      <Image
        src={tourPackages}
        alt="Туристические пакеты"
        className={styles.image}
      />
      <div className={styles.content}>
        <Title />
        <div className={styles.button_wrapper}>
          <Button
            type={ButtonType.OTLINE_BUTTON}
            as="button"
            className={styles.button}
          >
            <Typography
              type={TypographyType.DESCRIPTION}
              as="span"
              color={Color.BACKGROUND}
            >
              Узнать больше
            </Typography>
          </Button>
        </div>
      </div>
    </div>
  );
};
