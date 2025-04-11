import styles from "./Title.module.scss";
const Title = () => {
  return (
    <div className={styles.title_wrapper}>
      <h1 className={styles.title}>Горящие туры</h1>
      <p className={styles.description}>
        В разделе «Горящие туры» вас ждут скидки и невероятные цены на отдых в
        лучших местах. Не упустите шанс отправиться в путешествие вашей мечты по
        самой привлекательной стоимости!
      </p>
    </div>
  );
};
export default Title;
