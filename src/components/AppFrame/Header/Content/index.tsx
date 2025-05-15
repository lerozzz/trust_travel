import { Button, ButtonType } from "@/components/common/Button";
import { Typography, TypographyType } from "@/components/common/Typography";
import Links from "./Links";
import Phone from "./Phone";
import styles from "./style.module.scss";


const Content = () => {
  return (
    <div className={styles.content}>
      <Links />
      <Phone />
      <Button
        type={ButtonType.FILLED_BUTTON}
        as="button"
        className={styles.application_button}
      >
        <Typography
          type={TypographyType.HEADER}
          as="span"
          color="#fcfdff"
          >
          Оставить заявку
          </Typography>
        </Button>
    </div>
  );
};

export default Content;
