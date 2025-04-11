import benefit_1 from "@public/main/benefit_1.svg";
import benefit_2 from "@public/main/benefit_2.svg";
import Image from "next/image";
import styles from "./Description.module.scss";
const Decription = () => {
  return (
    <div className={styles.description_wrapper}>
      <p className={styles.overtitle}>О нас</p>
      <h1 className={styles.title}>Ваши ворота в приключения</h1>
      <p className={styles.description}>
        Trust Travel приглашает вас открыть для себя красоту и разнообразие
        путешествий. Находясь в Казахстане, мы специализируемся на разработке
        индивидуальных маршрутов, отвечающих вашим уникальным вкусам и
        интересам.{" "}
      </p>
      <div className={styles.benefit_wrapper}>
        <Image
          className={styles.benefit_1}
          alt="benefit_1"
          width={40}
          height={40}
          src={benefit_1}
        />
        <p className={styles.benefit_1}>Прекрасный опыт</p>
      </div>
      <div className={styles.benefit_wrapper}>
        <Image
          className={styles.benefit_2}
          alt="benefit_2"
          width={40}
          height={40}
          src={benefit_2}
        />
        <p className={styles.benefit_2}>Самые дешевые предложения</p>
      </div>
      <button className={styles.outline_button}>Читать далее</button>
    </div>
  );
};
export default Decription;
