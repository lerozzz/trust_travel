import cn from 'classnames';
import React from 'react';
import styles from "./index.module.scss";


export enum TypographyType {
    TITLE = 'title',
    OVERTITLE = 'overtitle',
    DESCRIPTION = 'description',
    HEADER = 'header',
    FOOTER = 'footer'
}

interface TypographyProps{
    type: TypographyType; //text variants
    children: React.ReactNode; //component contains smt
    className?: string;  //custome classes
    as?: keyof JSX.IntrinsicElements; //for html tag select
    color?: string;
    
}

export const Typography: React.FC<TypographyProps> = ({
    type,
    children,
    className,
    as: Tag = 'p',
    color,

}) => {
    return (
        <Tag className={cn([className, styles[type]])} style={color ? {color}:undefined}>
            {children}
        </Tag>)
}