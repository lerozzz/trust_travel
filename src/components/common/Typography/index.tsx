import cn from 'classnames';
import React from 'react';
import styles from "./index.module.scss";


export enum TypographyType {
    TITLE = 'title',
    OVERTITLE = 'overtitle',
    DESCRIPTION = 'description',
    HEADER = 'header',
    FOOTER = 'footer',
    CARD_TEXT  = 'cardText'
}

export type TypographyProps = {
    type: TypographyType; //Вариаты текста
    children: React.ReactNode; //Компонент принимает вложеные элементы(<Вложенные элементы-все между закрыв и открыв тегом>)
    className?: string;  //Передаем не обязательно строку 
    as?: keyof JSX.IntrinsicElements; //Рендер HTML элемента
    color?: string;//цвет
}

export const Typography: React.FC<TypographyProps> = ({
    type,
    children,
    className,
    as: Tag = 'p',
    color,

}) => {
    return (
        <Tag className={cn([className, styles[type]])} style={color ? {
            'color': color}: undefined}>
            {children}
        </Tag>)
}