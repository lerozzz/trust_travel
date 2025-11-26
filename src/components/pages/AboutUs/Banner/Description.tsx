import {
  Color,
  Typography,
  TypographyType,
} from "@/components/common/Typography";
import plane from "@public/main/plane.svg";
import support from "@public/main/support.svg";
import tour from "@public/main/tour.svg";
import Image from "next/image";
import styles from "./Description.module.scss";

const Description = () => {
  return (
    <div className={styles.wrapper}>
      <Typography
        type={TypographyType.TITLE_SECONDARY}
        as="h2"
        color={Color.TEXT_PRIMARY}
        className={styles.title}
      >
        Ваша гарантия хорошего отдыха
      </Typography>

      <Typography
        type={TypographyType.DESCRIPTION}
        as="p"
        color={Color.TEXT_SECONDARY}
        className={styles.description}
      >
        Trust Travel приглашает вас открыть для себя красоту и разнообразие
        путешествий. Находясь в Казахстане, мы специализируемся на разработке
        индивидуальных маршрутов.
      </Typography>
      <div className={styles.wrapper__benefits}>
        <div className={styles.wrapper__benefit}>
          <Image
            className={styles.benefit_1}
            alt="benefit_1"
            width={40}
            height={40}
            src={support}
          />
          <Typography
            type={TypographyType.DESCRIPTION}
            as="p"
            color={Color.TEXT_SECONDARY}
            className={styles.benefit_1}
          >
            Поддержка 24/7
          </Typography>
        </div>
        <div className={styles.wrapper__benefit}>
          <Image
            className={styles.benefit_1}
            alt="benefit_1"
            width={40}
            height={40}
            src={tour}
          />
          <Typography
            type={TypographyType.DESCRIPTION}
            as="p"
            color={Color.TEXT_SECONDARY}
            className={styles.benefit_1}
          >
            Обширный выбор туров
          </Typography>
        </div>
        <div className={styles.wrapper__benefit}>
          <Image
            className={styles.benefit_1}
            alt="benefit_1"
            width={40}
            height={40}
            src={plane}
          />
          <Typography
            type={TypographyType.DESCRIPTION}
            as="p"
            color={Color.TEXT_SECONDARY}
            className={styles.benefit_1}
          >
            Индивидуальный подход
          </Typography>
        </div>
      </div>
    </div>
  );
};
export default Description;
