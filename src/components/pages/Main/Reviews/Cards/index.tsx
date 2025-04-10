import Card from "./Card";
import { cardsList } from "./CardInfo";
import styles from "./index.module.scss";

const Cards = () => {
  return (
    <div className={styles.cards}>
      <div className={styles.cards_wrapper}>
        {cardsList.map((el, index) => (
          <Card key={index} {...el} />
        ))}
      </div>
    </div>
  );
};

export default Cards;
