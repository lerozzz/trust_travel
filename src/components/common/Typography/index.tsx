import cn from "classnames";
import React from "react";
import styles from "./index.module.scss";

export enum TypographyType {
  TITLE = "title",
  TITLE_SECONDARY = "title_secondary",
  TITLE_TOURS = "title_tours",
  OVERTITLE = "overtitle",
  DESCRIPTION = "description",
  DESCRIPTION_TOURS = "description_tours",
  HEADER = "header",
  FOOTER = "footer",
  CARD_TEXT = "card_text",
  CARD_TITLE = "card_title",
  CARD_TITLE_SECONDARY = "card_title_secondary",
  FILTERS_TITLE = "filters_title",
}

export enum Color {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  TEXT_PRIMARY = "text-primary",
  TEXT_SECONDARY = "text-secondary",
  BACKGROUND = "background",
  SEARCH_FORM = "search_form",
  STARS = "stars",
}

export type TypographyProps = {
  type: TypographyType; //Вариаты текста
  children: React.ReactNode; //Компонент принимает вложеные элементы(<Вложенные элементы-все между закрыв и открыв тегом>)
  className?: string; //Передаем не обязательно строку
  as?: keyof JSX.IntrinsicElements; //Рендер HTML элемента
  color?: Color; //цвет
};

export const Typography: React.FC<TypographyProps> = ({
  type,
  children,
  className,
  as: Tag = "p",
  color = Color.BACKGROUND,
}) => {
  return (
    <Tag className={cn([styles[type], styles[color], className])}>
      {children}
    </Tag>
  );
};
