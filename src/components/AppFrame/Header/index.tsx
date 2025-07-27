import logo from "@public/main/logo.png";
import Image from "next/image";
import Content from "./Content";
import styles from "./index.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Image alt="logo" width={140} height={65} src={logo} />
        <Content />
      </div>
    </header>
  );
};

export default Header;
