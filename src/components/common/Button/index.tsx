import cn from "classnames";
import React from "react";
import styles from "./index.module.scss";

export enum ButtonType {
  OTLINE_BUTTON = "outlineButton",
  FILLED_BUTTON = "filledButton",
}

export type ButtonProps = {
  type: ButtonType; //Вариаты текста
  children: React.ReactNode; //Компонент принимает вложеные элементы(<Вложенные элементы-все между закрыв и открыв тегом>)
  className?: string; //Передаем не обязательно строку
  as?: keyof JSX.IntrinsicElements; //Рендер HTML элемента
  bgColor?: string; //цвет
} & React.HTMLProps<HTMLButtonElement>;

export const Button: React.FC<ButtonProps> = ({
  type,
  children,
  className,
  bgColor,
  ...other
}) => {
  return (
    <button
      className={cn([className, styles[type]])}
      style={{ backgroundColor: bgColor }}
      {...other}
    >
      {children}
    </button>
  );
};
