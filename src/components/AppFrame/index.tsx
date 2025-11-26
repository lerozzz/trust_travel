import { FC, PropsWithChildren } from "react";
import { RootStoreProvider } from "./(model)/RootStore/context";
import Footer from "./Footer";
import Header from "./Header";
import styles from "./index.module.scss";

const AppFrame: FC<PropsWithChildren<Record<string, unknown>>> = (props) => {
  const { children } = props;

  return (
    <RootStoreProvider>
      <Header />
      <main className={styles.container}>{children}</main>
      <Footer />
    </RootStoreProvider>
  );
};

export default AppFrame;
