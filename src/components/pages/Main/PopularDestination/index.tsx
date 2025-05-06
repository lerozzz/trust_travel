import { Typography, TypographyType } from "@/components/common/Typography";
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
      <Typography
        type={TypographyType.DESCRIPTION}
        as="button"
        className={styles.button}
      >
          Все идеи
          </Typography>
      </div>
    </Container>
  );
};
