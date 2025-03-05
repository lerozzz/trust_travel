import Links from "./Links";
import Phone from "./Phone";
import styles from "./style.module.scss";

const Content = () => {
  return (
    <div className={styles.content}>
      <Links />
      <Phone />
      <button className={styles.application_button}>Оставить заявку</button>
    </div>
  );
};

export default Content;
