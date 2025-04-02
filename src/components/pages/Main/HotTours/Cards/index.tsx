import { FC } from "react";
import { Card as CardType } from "../Cards/CardInfo";
import Card from "./Card";
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
