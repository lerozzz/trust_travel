import { Container } from "@common/Container";
import about_us from "@public/main/about_us.png";
import Image from "next/image";
import Description from "./Description";
import styles from "./index.module.scss";

export const AboutUs = () => {
  return (
    <Container>
      <div className={styles.wrapper}>
        <Description />
        <Image
          className={styles.main_image}
          alt="about_us"
          width={448}
          height={552}
          src={about_us}
        />
      </div>
    </Container>
  );
};
