import { Typography, TypographyType } from "@/components/common/Typography";
import styles from "./Title.module.scss";

const Title = () => {
  return (
    <div className={styles.title_wrapper}>
       <Typography
        type={TypographyType.TITLE}
        as="h1"
        className={styles.title}
      >
        Страны
      </Typography>
      
      <Typography
        type={TypographyType.DESCRIPTION}
        as="p"
        className={styles.description}
      >
        Здесь вы найдете подборки туров в самые популярные и экзотические уголки
        планеты. Выбирайте страну, которая вас всегда привлекала, и мы
        организуем для вас незабываемое путешествие.
        </Typography>
    </div>
  );
};
export default Title;
