"use client";
import { FC, useState } from "react";
import { CitiesKeys, data } from "./data";
import styles from "./index.module.scss";

const Tabs = () => {
  const [city, setCity] = useState<CitiesKeys>('all');
  const citiesKeys = Object.keys(data) as CitiesKeys[];
  
  const onChangeCity = (cityKey: CitiesKeys) => {
    setCity(cityKey);
  };

  return (
    <div>
      <div className={styles.button_wrapper}>
      {citiesKeys.map((cityKey, index) => (
        <Tab onClick={onChangeCity} key={index} data={{ cityKey, title: data[cityKey].title }} />
      ))}
        </div>
      <div className={styles.tabs_wrapper}>
        {data[city].list.map((el, index) => {
          return <div key={index}>{el.title}</div>;
        })}
      </div>
    </div>
  );
};

const Tab: FC<{
  data: { cityKey: CitiesKeys; title: string };
  onClick: (cityKey: CitiesKeys) => void;
}> = ({ data, onClick }) => {
  const { cityKey, title } = data;

  return <button className={styles.button} onClick={() => onClick(cityKey)}>{title}</button>
   
  
};
export default Tabs;