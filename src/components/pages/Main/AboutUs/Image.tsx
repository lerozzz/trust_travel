import about_us from "@public/main/about_us.png";
import benefit_1 from "@public/main/benefit_1.svg";
import benefit_2 from "@public/main/benefit_2.svg";
import Image from "next/image";
import styles from "./Image.module.scss";
const ImageFunc = () => {
  return (
    <div className={styles.images}>
      <Image
        className={styles.main_image}
        alt="about_us"
        width={448}
        height={552}
        src={about_us}
      />
      <Image
        className={styles.benefit_1}
        alt="benefit_1"
        width={40}
        height={40}
        src={benefit_1}
      />
      <Image
        className={styles.benefit_2}
        alt="benefit_2"
        width={40}
        height={40}
        src={benefit_2}
      />
    </div>
  );
};
export default ImageFunc;
