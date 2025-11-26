import {
  Color,
  Typography,
  TypographyType,
} from "@/components/common/Typography";
import { Container } from "@common/Container";
import background_image from "@public/main/about-us-banner.png";
import banner_about_us from "@public/main/bannerAboutUs.png";
import Image from "next/image";
import Description from "./Description";
import styles from "./index.module.scss";

export const Banner = () => {
  return (
    <Container>
      <div>
        <div className={styles.title}>
          <Typography
            type={TypographyType.TITLE}
            as="h1"
            color={Color.TEXT_PRIMARY}
          >
            О нас
          </Typography>
        </div>

        <div className={styles.wrapper__banner}>
          <Description />
          <div className={styles.images}>
            <Image
              alt="backgroundBannerImage"
              src={background_image}
              fill
              className={styles.backgroundBannerImage}
            />
            <div className={styles.mainBannerImage}>
              <Image
                alt="mainBannerImage"
                objectFit="contain"
                src={banner_about_us}
                fill
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
