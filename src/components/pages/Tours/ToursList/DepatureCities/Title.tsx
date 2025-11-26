import {
  Color,
  Typography,
  TypographyType,
} from "@/components/common/Typography";
import rhombus from "@public/main/rhombus.svg";
import { observer } from "mobx-react-lite";
import Image from "next/image";
import styles from "./index.module.scss";

export const Title = observer(() => {
  return (
    <div>
      <div className={styles.title_image_wrapper}>
        <Image alt="rhombus" width={21} height={21} src={rhombus} />
        <Typography
          type={TypographyType.FILTERS_TITLE}
          as="h3"
          color={Color.TEXT_PRIMARY}
        >
          Город вылета
        </Typography>
      </div>
      <Typography
        type={TypographyType.DESCRIPTION}
        as="p"
        className={styles.country}
        color={Color.TEXT_PRIMARY}
      >
        Казахстан
      </Typography>
    </div>
  );
});
