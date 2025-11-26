import { FC } from "react";
import { Tour } from "../../(model)/type";
import Card from "./Card";
import styles from "./index.module.scss";

interface CardsProps {
  allTours: Tour[];
}

export const Cards: FC<CardsProps> = ({ allTours }) => {
  return (
    <div className={styles.cards_wrapper}>
      {allTours.map((el, index) => (
        <Card key={index} {...el} />
      ))}
    </div>
  );
};
