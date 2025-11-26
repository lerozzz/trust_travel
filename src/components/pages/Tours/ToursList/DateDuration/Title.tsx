import {
  Color,
  Typography,
  TypographyType,
} from "@/components/common/Typography";
import rhombus from "@public/main/rhombus.svg";
import Image from "next/image";
import styles from "./index.module.scss";

export const Title = () => {
  return (
    <div className={styles.title_image_wrapper}>
      <Image alt="rhombus" width={21} height={21} src={rhombus} />
      <Typography
        type={TypographyType.FILTERS_TITLE}
        as="h3"
        color={Color.TEXT_PRIMARY}
      >
        Количество дней
      </Typography>
    </div>
  );
};
