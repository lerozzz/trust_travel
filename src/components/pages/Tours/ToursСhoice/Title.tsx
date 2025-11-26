import { Typography, TypographyType } from "@/components/common/Typography";
import styles from "./Title.module.scss";

const Title = () => {
  return (
    <div className={styles.title_wrapper}>
      <Typography
        type={TypographyType.TITLE_TOURS}
        as="h1"
        className={styles.title}
      >
        Выберите ваш идеальный тур
      </Typography>
      <Typography
        type={TypographyType.DESCRIPTION}
        as="p"
        className={styles.description}
      >
        Мы подготовили для вас подборку туристических предложений с подробными
        списками направлений. В них вы найдете все самые удивительные места,
        которые стоит посетить и которые подарят вам яркие впечатления.
      </Typography>
    </div>
  );
};
export default Title;
