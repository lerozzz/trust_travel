import { Typography, TypographyType } from "@/components/common/Typography";
import styles from "./Description.module.scss";

const Description = () => {
  return (
    <div className={styles.wrapper}>
      <Typography
        type={TypographyType.OVERTITLE}
        as="p"
       className={styles.overtitle}
      >  
        Исследуйте с нами
      </Typography>
      
      <Typography
        type={TypographyType.TITLE}
        as="h1"
        color="#2c2c2c"
        className={styles.title}
      >
        Исследуйте новые направления с нами
      </Typography>

      <Typography
        type={TypographyType.DESCRIPTION}
        as="p"
        className={styles.description}
      >
        Горящие туры и выгодные предложения для вашего незабываемого отдыха от
        Trust Travel
        
      </Typography>
      
      <Typography
          type={TypographyType.DESCRIPTION}
          color="#fcfdff"
          as="button"
          className={styles.filled_button}
      >
        Забронировать
      </Typography>
      
      <Typography
          type={TypographyType.DESCRIPTION}
          as="button"
          className={styles.outline_button}
        >
        Узнать больше
        </Typography>
    </div>
  );
};
export default Description;
