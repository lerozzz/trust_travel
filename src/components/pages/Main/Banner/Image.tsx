import banner_image from "@public/main/bannerPhotoGroup.png";
import background_image from "@public/main/banner_background1.png";
import Image from "next/image";
import styles from "./Image.module.scss";

const BannerImage = () => {
  return (
    <div className={styles.images}>
      <div className={styles.backgroundBannerImage}>
        <Image
          alt="backgroundBannerImage"
          objectFit="fill"
          src={background_image}
          fill
        />
      </div>
      <div className={styles.mainBannerImage}>
        <Image
          alt="mainBannerImage"
          objectFit="contain"
          src={banner_image}
          fill
        />
      </div>
    </div>
  );
};

export default BannerImage;
