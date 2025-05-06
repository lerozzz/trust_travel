import { Typography, TypographyType } from "@/components/common/Typography";
import { Container } from "@common/Container";
import Cards from "./Cards";
import Title from "./Title";
import styles from "./index.module.scss";

export const Countries = () => {
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
          Узнать больше
          </Typography>
      </div>
    </Container>
  );
};
