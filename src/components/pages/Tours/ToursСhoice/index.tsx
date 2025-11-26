import { default as tourChoice } from "@public/main/tour_choice_background.png";
import Image from "next/image";
import styles from "./index.module.scss";
import Title from "./Title";
import { ToursSearch } from "./ToursSearch";

export const ToursChoice = () => {
  return (
    <div className={styles.wrapper}>
      <Image
        src={tourChoice}
        alt="Туристические пакеты"
        className={styles.image}
      />
      <div className={styles.content}>
        <Title />
        <ToursSearch />
      </div>
    </div>
  );
};
