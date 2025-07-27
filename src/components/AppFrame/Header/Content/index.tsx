import { Button, ButtonType } from "@/components/common/Button";
import {
  Color,
  Typography,
  TypographyType,
} from "@/components/common/Typography";
import Links from "./Links";
import Phone from "./Phone";
import styles from "./style.module.scss";

const Content = () => {
  return (
    <div className={styles.content}>
      <Links />
      <Phone />
      <Button type={ButtonType.FILLED_BUTTON} as="button">
        <Typography
          type={TypographyType.HEADER}
          as="span"
          color={Color.BACKGROUND}
        >
          Оставить заявку
        </Typography>
      </Button>
    </div>
  );
};

export default Content;
