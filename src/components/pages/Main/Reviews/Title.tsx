import styles from "./Title.module.scss";
const Title = () => {
  return (
    <div className={styles.title_wrapper}>
      <h1 className={styles.title}>Отзывы</h1>
      <p className={styles.description}>
        В разделе «Отзывы» вы найдете множество историй и впечатлений от отдыха
        с Trust Travel. Убедитесь сами, что мы организуем незабываемые поездки!
      </p>
    </div>
  );
};
export default Title;
