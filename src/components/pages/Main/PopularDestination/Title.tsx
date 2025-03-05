import styles from "./Title.module.scss";
const Title = () => {
  return (
    <div className={styles.title_wrapper}>
      <h1 className={styles.title}>Популярные напрвления</h1>
      <p className={styles.description}>
        Trust Travel предлагает лучшие туры в самые популярные направления мира!
        Выбирайте из широкого списка курортов и стран, и мы поможем вам
        организовать незабываемое путешествие.
      </p>
    </div>
  );
};
export default Title;
