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
      <p className={styles.benefit_1}>Прекрасный опыт</p>
      <p className={styles.benefit_2}>Самые дешевые предложения</p>
      <button className={styles.outline_button}>Читать далее</button>
    </div>
  );
};
export default Decription;
