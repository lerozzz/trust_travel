import { FC } from "react";
import type { Tab as TabType } from ".";
import styles from "./Tab.module.scss";

const Tab: FC<TabProps> = (props) => {
  const { title } = props;
  return (
    <div className={styles.tab_wrapper}>
      <button className={styles.button}>{title}</button>
        </div>
  );
};
export default Tab;

export type TabProps = TabType;
