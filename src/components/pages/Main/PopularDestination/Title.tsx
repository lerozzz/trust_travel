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
        color={Color.TEXT_PRIMARY}
        className={styles.title}
      >
        Популярные напрвления
      </Typography>
      <Typography
        type={TypographyType.DESCRIPTION}
        as="p"
        className={styles.description}
        color={Color.TEXT_SECONDARY}
      >
        Trust Travel предлагает лучшие туры в самые популярные направления мира!
        Выбирайте из широкого списка курортов и стран, и мы поможем вам
        организовать незабываемое путешествие.
      </Typography>
    </div>
  );
};
export default Title;
