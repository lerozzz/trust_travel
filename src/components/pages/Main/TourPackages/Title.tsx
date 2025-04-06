import styles from "./Title.module.scss";
const Title = () => {
  return (
    <div className={styles.title_wrapper}>
      <h1 className={styles.title}>Все пакеты туров</h1>
      <p className={styles.description}>
      Каждый мечтатель знает, что абсолютно реально скучать по месту, где ты никогда не был даже больше, чем по тому, где был.
      </p>
    </div>
  );
};
export default Title;
