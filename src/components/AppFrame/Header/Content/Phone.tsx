import Link from "next/link";
import styles from "./style.module.scss";

const Phone = () => {
  return (
    <Link className={styles.phone} href="tel:+77012747555">
      +7 (701) 274 75 55
    </Link>
  );
};

export default Phone;
