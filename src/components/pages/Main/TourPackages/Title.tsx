import {
  Color,
  Typography,
  TypographyType,
} from "@/components/common/Typography";
import styles from "./Title.module.scss";

const Title = () => {
  return (
    <div className={styles.title_wrapper}>
      <Typography
        type={TypographyType.DESCRIPTION_TOURS}
        as="h1"
        className={styles.title}
        color={Color.BACKGROUND}
      >
        Все пакеты туров
      </Typography>

      <Typography
        type={TypographyType.TITLE_TOURS}
        as="p"
        className={styles.description}
      >
        Каждый мечтатель знает, что абсолютно реально скучать по месту, где ты
        никогда не был даже больше, чем по тому, где был.
      </Typography>
    </div>
  );
};
export default Title;
