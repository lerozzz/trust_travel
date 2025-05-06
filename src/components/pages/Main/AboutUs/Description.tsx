import { Typography, TypographyType } from "@/components/common/Typography";
import benefit_1 from "@public/main/benefit_1.svg";
import benefit_2 from "@public/main/benefit_2.svg";
import Image from "next/image";
import styles from "./Description.module.scss";

const Decription = () => {
  return (
    <div className={styles.description_wrapper}>
       <Typography
        type={TypographyType.OVERTITLE}
        as="p"
       className={styles.overtitle}
      > 
        О нас
      </Typography>
      <Typography
        type={TypographyType.TITLE}
        as="h1"
       className={styles.title}
      > 
        Ваши ворота в приключения
        </Typography>
        <Typography
        type={TypographyType.DESCRIPTION}
        as="p"
       className={styles.description}
      > 
        Trust Travel приглашает вас открыть для себя красоту и разнообразие
        путешествий. Находясь в Казахстане, мы специализируемся на разработке
        индивидуальных маршрутов, отвечающих вашим уникальным вкусам и
      </Typography>
      <div className={styles.benefit_wrapper}>
        <Image
          className={styles.benefit_1}
          alt="benefit_1"
          width={40}
          height={40}
          src={benefit_1}
        />
         <Typography
        type={TypographyType.DESCRIPTION}
        as="p"
       className={styles.benefit_1}
      > 
          Прекрасный опыт
          </Typography>
      </div>
      <div className={styles.benefit_wrapper}>
        <Image
          className={styles.benefit_2}
          alt="benefit_2"
          width={40}
          height={40}
          src={benefit_2}
        />
         <Typography
        type={TypographyType.DESCRIPTION}
        as="p"
       className={styles.benefit_2}
      > 
          Самые дешевые предложения
          </Typography>
      </div>
      <button className={styles.outline_button}>
      <Typography
        type={TypographyType.DESCRIPTION}
      > 
        Читать далее
        </Typography>
      </button>
    </div>
  );
};
export default Decription;
