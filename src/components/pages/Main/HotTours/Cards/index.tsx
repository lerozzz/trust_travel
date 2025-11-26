import { FC } from "react";
import Card from "./Card";
import { Card as CardType } from "./data";
import styles from "./index.module.scss";

interface CardsProps {
  list: CardType[];
}

const Cards: FC<CardsProps> = ({ list }) => {
  return (
    <div className={styles.cards_wrapper}>
      {list.map((el, index) => (
        <Card key={index} {...el} />
      ))}
    </div>
  );
};

export default Cards;
