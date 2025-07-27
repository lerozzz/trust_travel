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
      >
        Отзывы
      </Typography>

      <Typography
        type={TypographyType.DESCRIPTION}
        as="p"
        className={styles.description}
        color={Color.TEXT_SECONDARY}
      >
        В разделе «Отзывы» вы найдете множество историй и впечатлений от отдыха
        с Trust Travel. Убедитесь сами, что мы организуем незабываемые поездки!
      </Typography>
    </div>
  );
};
export default Title;
