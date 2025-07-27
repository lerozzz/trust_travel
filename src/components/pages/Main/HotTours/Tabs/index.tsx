"use client";
import { Button, ButtonType } from "@/components/common/Button";
import {
  Color,
  Typography,
  TypographyType,
} from "@/components/common/Typography";
import classNames from "classnames";
import { FC, useState } from "react";
import Cards from "../Cards/index";
import { CitiesKeys, data } from "./data";
import styles from "./index.module.scss";

const Tabs = () => {
  const [currentCityKey, setCity] = useState<CitiesKeys>("all");
  const citiesKeys = Object.keys(data) as CitiesKeys[];

  const onChangeCity = (cityKey: CitiesKeys) => {
    setCity(cityKey);
  };

  return (
    <div>
      <div className={styles.button_wrapper}>
        {citiesKeys.map((cityKey, index) => (
          <Tab
            isSelectedCity={currentCityKey === cityKey}
            onClick={onChangeCity}
            key={index}
            data={{ cityKey, title: data[cityKey].title }}
          />
        ))}
      </div>
      <div className={styles.tabs_wrapper}>
        <Cards list={data[currentCityKey].list} />
      </div>
    </div>
  );
};

type TabProps = {
  data: { cityKey: CitiesKeys; title: string };
  onClick: (cityKey: CitiesKeys) => void;
  isSelectedCity: boolean;
};

const Tab: FC<TabProps> = ({ data, onClick, isSelectedCity }) => {
  const { cityKey, title } = data;

  const btnClass = classNames([
    styles.button,
    { [styles.button__active]: isSelectedCity === true },
  ]);
  return (
    <Button
      type={ButtonType.OTLINE_BUTTON}
      as="button"
      className={btnClass}
      onClick={() => onClick(cityKey)}
    >
      <Typography
        type={TypographyType.DESCRIPTION}
        className={btnClass}
        color={Color.TEXT_SECONDARY}
      >
        {title}
      </Typography>
    </Button>
  );
};
export default Tabs;
