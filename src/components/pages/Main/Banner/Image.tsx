import banner_image from "@public/main/bannerPhotoGroup.png";
import background_image from "@public/main/banner_background1.png";
import Image from "next/image";
import styles from "./Image.module.scss";

const BannerImage = () => {
  return (
    <div className={styles.images}>
      <div className={styles.backgroundBannerImage}>
        <Image alt="backgroundBannerImage" src={background_image} />
      </div>
      <div className={styles.mainBannerImage}>
        <Image
          alt="mainBannerImage"
          src={banner_image}
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
    </div>
  );
};

export default BannerImage;
