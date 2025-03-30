import { Container } from "@common/Container";
import Title from "./Title";
import Tabs from ".//Tabs/index";
import styles from "./index.module.scss";

export const HotTours = () => {
  return (
    <Container>
      <Title />
      <Tabs />
      <div className={styles.button_wrapper}>
        <button className={styles.button}>Все идеи</button>
      </div>
    </Container>
  );
};
