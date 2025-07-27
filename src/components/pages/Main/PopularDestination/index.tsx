import { Button, ButtonType } from "@/components/common/Button";
import {
  Color,
  Typography,
  TypographyType,
} from "@/components/common/Typography";
import { Container } from "@common/Container";
import Cards from ".//Cards/index";
import Title from "./Title";
import styles from "./index.module.scss";

export const PopularDestination = () => {
  return (
    <Container>
      <Title />
      <Cards />
      <div className={styles.button_wrapper}>
        <Button type={ButtonType.OTLINE_BUTTON} as="button">
          <Typography
            type={TypographyType.DESCRIPTION}
            as="span"
            color={Color.TEXT_PRIMARY}
          >
            Все идеи
          </Typography>
        </Button>
      </div>
    </Container>
  );
};
