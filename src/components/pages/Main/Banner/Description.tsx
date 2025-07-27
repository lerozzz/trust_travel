import { Button, ButtonType } from "@/components/common/Button";
import {
  Color,
  Typography,
  TypographyType,
} from "@/components/common/Typography";
import styles from "./Description.module.scss";

const Description = () => {
  return (
    <div className={styles.wrapper}>
      <Typography
        type={TypographyType.OVERTITLE}
        as="p"
        color={Color.PRIMARY}
        className={styles.overtitle}
      >
        Исследуйте с нами
      </Typography>

      <Typography
        type={TypographyType.TITLE}
        as="h1"
        color={Color.TEXT_PRIMARY}
        className={styles.title}
      >
        Исследуйте новые направления с нами
      </Typography>

      <Typography
        type={TypographyType.DESCRIPTION}
        as="p"
        color={Color.TEXT_SECONDARY}
        className={styles.description}
      >
        Горящие туры и выгодные предложения для вашего незабываемого отдыха от
        Trust Travel
      </Typography>

      <div className={styles.button_wrapper}>
        <Button type={ButtonType.FILLED_BUTTON} as="button">
          <Typography
            type={TypographyType.DESCRIPTION}
            color={Color.BACKGROUND}
            as="span"
          >
            Забронировать
          </Typography>
        </Button>

        <Button type={ButtonType.OTLINE_BUTTON} as="button">
          <Typography
            type={TypographyType.DESCRIPTION}
            as="span"
            color={Color.TEXT_PRIMARY}
          >
            Узнать больше
          </Typography>
        </Button>
      </div>
    </div>
  );
};
export default Description;
