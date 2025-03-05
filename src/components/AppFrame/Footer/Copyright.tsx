import styles from "./index.module.scss";
const Copyright = () => {
  return (
    <div className={styles.bottom_elements}>
      <hr className={styles.line_division} />
      <p className={styles.copyright_text}>@copyrights.trust.travel</p>
    </div>
  );
};

export default Copyright;
