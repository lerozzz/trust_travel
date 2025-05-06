import { Typography, TypographyType } from "@/components/common/Typography";
import Links from "./Links";
import Phone from "./Phone";
import styles from "./style.module.scss";


const Content = () => {
  return (
    <div className={styles.content}>
      <Links />
      <Phone />
      <button className={styles.application_button}>
        <Typography
          type={TypographyType.HEADER}
          as="span"
          color="#fcfdff"
          >
          Оставить заявку
          </Typography>
      </button>
    </div>
  );
};

export default Content;
