import Copyright from "./Copyright";
import styles from "./index.module.scss";
import InternalLinks from "./Information/InternalLinks";
import MainInfo from "./Information/MainInfo";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <MainInfo />
        <InternalLinks />
      </div>
      <Copyright />
    </footer>
  );
};

export default Footer;
