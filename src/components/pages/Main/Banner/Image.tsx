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
      <div className={styles.mainBannerWrapper}>
        <Image
          className={styles.mainBannerImage}
          alt="mainBannerImage"
          src={mainBannerImage}
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className={styles.overlayImages}>
        <div className={styles.imageWrapper}>
          <Image src={image_1} alt="image_1" fill sizes="(max-width: 768px) 25vw, 150px" style={{ objectFit: "contain" }} />
        </div>
        <div className={styles.imageWrapper}>
          <Image src={banner_image} alt="banner_image" fill sizes="(max-width: 768px) 30vw, 220px" style={{ objectFit: "contain" }} />
        </div>
        <div className={styles.imageWrapper}>
          <Image src={image_2} alt="image_2" fill sizes="(max-width: 768px) 20vw, 120px" style={{ objectFit: "contain" }} />
        </div>
        <div className={styles.imageWrapper}>
          <Image src={image_3} alt="image_3" fill sizes="(max-width: 768px) 20vw, 110px" style={{ objectFit: "contain" }} />
        </div>
        <div className={styles.imageWrapper}>
          <Image src={image_4} alt="image_4" fill sizes="(max-width: 768px) 25vw, 140px" style={{ objectFit: "contain" }} />
        </div>
      </div>
    </div>
  );
};

export default BannerImage;