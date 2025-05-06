import { Typography, TypographyType } from "@/components/common/Typography";
import { default as tourPackages } from "@public/main/tour_packages.png";
import Image from "next/image";
import Title from "./Title";
import styles from "./index.module.scss";


export const TourPackages = () => {
    return (
        <div className={styles.wrapper}>
             <Image
      src={tourPackages}
      alt='Туристические пакеты'
      objectFit="cover"
                className={styles.image} />
            <div className={styles.content}>
          <Title />
          <div className={styles.button_wrapper}>

          <Typography
          type={TypographyType.DESCRIPTION}
          as="button"
          className={styles.button}
        >
              Узнать больше
              </Typography>
        </div>
            </div>
     </div>
  );
};
