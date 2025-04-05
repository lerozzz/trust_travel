import { cardsList } from "./CardInfo";
import Card from "./Card";
import styles from "./index.module.scss";

const Cards = () => {
  return (
    <div className={styles.card_wrapper}>
      {cardsList.map((el, index) => {
        return <Card key={index} {...el} />;
      })}
    </div>
  );
};
export default Cards;
