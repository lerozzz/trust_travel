import { Container } from "@common/Container";
import Description from "./Description";
import BannerImage from "./Image";
import styles from "./index.module.scss";

export const Banner = () => {
  return (
    <Container>
      <div className={styles.banner_wrapper}>
        <Description />
        <BannerImage />
      </div>
    </Container>
  );
};
