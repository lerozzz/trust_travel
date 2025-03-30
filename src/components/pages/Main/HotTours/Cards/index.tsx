import Card from "./Card";
import { cards } from "./CardInfo";
import styles from "./index.module.scss";

const Cards = () => {
  return (
    <div className={styles.card_wrapper}>
      {cards.map((el, index) => {
        return <Card key={index} {...el} />;
      })}
    </div>
  );
};
export default Cards;
