import { Container } from "@common/Container";
import Description from "./Description";
import ImageFunc from "./Image";
import styles from "./index.module.scss";

export const AboutUs = () => {
  return (
    <Container>
      <div className={styles.wrapper}>
        <Description />
        <ImageFunc />
      </div>
    </Container>
  );
};
