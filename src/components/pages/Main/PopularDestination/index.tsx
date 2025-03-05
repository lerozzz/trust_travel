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
        <button className={styles.button}>Все идеи</button>
      </div>
    </Container>
  );
};
