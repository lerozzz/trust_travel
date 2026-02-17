import { Tour } from "@/app/api/tours/list/data";
import {
  Color,
  Typography,
  TypographyType,
} from "@/components/common/Typography";
import { FC } from "react";
import Card from "./Card";
import styles from "./index.module.scss";

interface CardsProps {
  allTours: Tour[];
  isEmptyTours: boolean;
}

export const Cards: FC<CardsProps> = ({ allTours, isEmptyTours }) => {
  if (isEmptyTours) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography color={Color.PRIMARY} type={TypographyType.TITLE}>
          Упс, туры не нашлись
        </Typography>
      </div>
    );
  }

  return (
    <div className={styles.cards_wrapper}>
      {allTours.map((el, index) => (
        <Card key={index} {...el} />
      ))}
    </div>
  );
};
