import mainBannerImage from "@public/main/banner_background.png";
import banner_image from "@public/main/banner_image.png";
import image_1 from "@public/main/image_1.png";
import image_2 from "@public/main/image_2.png";
import image_3 from "@public/main/image_3.png";
import image_4 from "@public/main/image_4.png";
import Image from "next/image";
import styles from "./Image.module.scss";

const BannerImage = () => {
  return (
    <div className={styles.images}>
      <Image
        className={styles.mainBannerImage}
        alt="mainBannerImage"
        width={975}
        height={623}
        src={mainBannerImage}
      />

      <Image
        className={styles.banner_image}
        alt="banner_image"
        width={448}
        height={552}
        src={banner_image}
      />
      <Image
        className={styles.image_1}
        alt="image_1"
        width={194}
        height={261}
        src={image_1}
      />
      <Image
        className={styles.image_2}
        alt="image_2"
        width={160}
        height={186}
        src={image_2}
      />
      <Image
        className={styles.image_3}
        alt="image_3"
        width={142}
        height={184}
        src={image_3}
      />
      <Image
        className={styles.image_4}
        alt="image_4"
        width={177}
        height={210}
        src={image_4}
      />
    </div>
  );
};
export default BannerImage;
