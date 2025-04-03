import { Container } from "@common/Container";
import Title from "./Title";
import styles from "./index.module.scss";
import Cards from "./Cards";

export const Countries = () => {
  return (
    <Container>
      <Title />
      <Cards />
      <div className={styles.button_wrapper}>
        <button className={styles.button}>Узнать больше</button>
      </div>
    </Container>
  );
};
