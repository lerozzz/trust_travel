import { FC, useState } from "react";
"use client";

const Tabs = () => {
  const [city, setCity] = useState<CitiesKeys>('all');
  const citiesKeys = Object.keys(data) as CitiesKeys[];
  
  const onChangeCity = (cityKey: CitiesKeys) => {
    setCity(cityKey);
  };

  return (
    <div>
      {citiesKeys.map((cityKey, index) => (
        <Tab onClick={onChangeCity} key={index} data={{ cityKey, title: data[cityKey].title }} />
      ))}
      <div>
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

  return <button onClick={() => onClick(cityKey)}>{title}</button>;
};
export default Tabs;