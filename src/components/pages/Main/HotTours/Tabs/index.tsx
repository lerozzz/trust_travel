import { useState } from "react";
import Tab from "./Tab";
import { tabs } from "./TabInfo";
import { CitiesKey } from "./data";
import styles from "./index.module.scss";



const Tabs = () => {
    // const [cityCards, setCityCards] = useState<CitiesKey>('all');
  return (
    <div className={styles.tab_wrapper}>
      {tabs.map((el, index) => {
        return <Tab key={index} {...el} />;
      })}
    </div>
  );
};
export default Tabs;