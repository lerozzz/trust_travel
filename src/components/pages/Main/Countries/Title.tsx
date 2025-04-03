import styles from "./Title.module.scss";
const Title = () => {
  return (
    <div className={styles.title_wrapper}>
      <h1 className={styles.title}>Страны</h1>
      <p className={styles.description}>
        Здесь вы найдете подборки туров в самые популярные и экзотические уголки
        планеты. Выбирайте страну, которая вас всегда привлекала, и мы
        организуем для вас незабываемое путешествие.
      </p>
    </div>
  );
};
export default Title;
