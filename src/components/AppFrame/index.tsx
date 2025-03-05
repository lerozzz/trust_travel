import { FC, PropsWithChildren } from "react";
import Footer from "./Footer";
import Header from "./Header";
import styles from "./index.module.scss";

const AppFrame: FC<PropsWithChildren<Record<string, unknown>>> = (props) => {
  const { children } = props;

  return (
    <>
      <Header />
      <main className={styles.container}>{children}</main>
      <Footer />
    </>
  );
};

export default AppFrame;
