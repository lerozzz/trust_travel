import cn from "classnames";
import React from "react";
import styles from "./index.module.scss";

export enum InputType {
  OTLINE_INPUT = "outlineInput",
}

export type InputProps = {
  type: InputType;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  bgColor?: string;
} & React.HTMLProps<HTMLInputElement>;

export const Input: React.FC<InputProps> = ({
  type,
  className,
  bgColor,
  ...other
}) => {
  return (
    <input
      className={cn([className, styles[type]])}
      style={{ backgroundColor: bgColor }}
      {...other}
    ></input>
  );
};
