import { FC, useState } from "react";

const data = {
  all: {
    title: 'Все города',
    list: [{ title: 'Первая карточка' }, { title: 'Вторая карточка' }, { title: 'Третья карточка' }],
  },
  astana: {
    title: 'Астана',
    list: [
      { title: 'Первая карточка Астана' },
      { title: 'Вторая карточка Астана' },
      { title: 'Третья карточка Астана' },
    ],
  },
  almaty: {
    title: 'Алматы',
    list: [
      { title: 'Первая карточка Алматы' },
      { title: 'Вторая карточка Алматы' },
      { title: 'Третья карточка Алматы' },
    ],
  },
  karaganda: {
    title: 'Караганда',
    list: [
      { title: 'Первая карточка Караганда' },
      { title: 'Вторая карточка Караганда' },
      { title: 'Третья карточка Караганда' },
    ],
  },
};

type CitiesKeys = keyof typeof data;

export const Component = () => {
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



// export const tabs: Tab[] = [
//   {
//     title: "Все",
//   },
//   {
//     title: "Астана",
//   },
//   {
//     title: "Алмата",
//   },
//   {
//     title: "Шымкент",
//   },
//   {
//     title: "Караганда",
//   },
// ];

// export type Tab = {
//   title: string;
// };