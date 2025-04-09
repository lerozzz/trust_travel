import mainBannerImage from "@public/main/banner_background.png";
import banner_image from "@public/main/banner_image.png";
import image_1 from "@public/main/image_1.png";
import image_2 from "@public/main/image_2.png";
import image_3 from "@public/main/image_3.png";
import image_4 from "@public/main/image_4.png";
import Image from "next/image";
import styles from "./Image.module.scss";

const backgoundImages = [
  { src: image_1, className: styles.image_1 },
  { src: image_2, className: styles.image_2 },
  { src: image_3, className: styles.image_3 },
  { src: image_4, className: styles.image_4 },
];

const BannerImage = () => {
  return (
    <div className={styles.images}>
      <div className={styles.mainBannerImage}>
        <Image alt="mainBannerImage" src={mainBannerImage} fill />
      </div>

      <div className={styles.banner_image}>
        <Image alt="banner_image" src={banner_image} fill />
      </div>

      {backgoundImages.map(({ className, src }, index) => (
        <div className={className} key={index}>
          <Image src={src} alt={`image_${index}`} fill />
        </div>
      ))}
      {/* <div className={styles.image_1}>
        <Image alt="image_1" src={image_1} fill />
      </div>

      <div className={styles.image_2}>
        <Image alt="image_2" src={image_2} fill />
      </div>

      <div className={styles.image_3}>
        <Image alt="image_3" src={image_3} fill />
      </div>

      <div className={styles.image_4}>
        <Image alt="image_4" src={image_4} fill />
      </div> */}
    </div>
  );
};

export default BannerImage;
