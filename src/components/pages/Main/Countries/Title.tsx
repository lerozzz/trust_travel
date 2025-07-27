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
        type={TypographyType.TITLE}
        as="h1"
        className={styles.title}
        color={Color.TEXT_PRIMARY}
      >
        Страны
      </Typography>

      <Typography
        type={TypographyType.DESCRIPTION}
        as="p"
        className={styles.description}
        color={Color.TEXT_PRIMARY}
      >
        Здесь вы найдете подборки туров в самые популярные и экзотические уголки
        планеты. Выбирайте страну, которая вас всегда привлекала, и мы
        организуем для вас незабываемое путешествие.
      </Typography>
    </div>
  );
};
export default Title;
