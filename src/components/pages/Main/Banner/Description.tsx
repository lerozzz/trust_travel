import styles from "./Description.module.scss";

const Description = () => {
  return (
    <div className={styles.text_and_button}>
      <p className={styles.overtitle}>Исследуйте с нами</p>
      <h1 className={styles.title}>Исследуйте новые направления с нами</h1>
      <p className={styles.description}>
        Горящие туры и выгодные предложения для вашего незабываемого отдыха от
        Trust Travel
      </p>
      <button className={styles.filled_button}>Забронировать</button>
      <button className={styles.outline_button}>Узнать больше</button>
    </div>
  );
};
export default Description;
