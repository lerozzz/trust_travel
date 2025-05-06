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
        Горящие туры
          </Typography>
      <Typography
        type={TypographyType.DESCRIPTION}
        as="p"
        className={styles.description}
      >
        В разделе «Горящие туры» вас ждут скидки и невероятные цены на отдых в
        лучших местах. Не упустите шанс отправиться в путешествие вашей мечты по
        самой привлекательной стоимости!
        </Typography>
    </div>
  );
};
export default Title;
