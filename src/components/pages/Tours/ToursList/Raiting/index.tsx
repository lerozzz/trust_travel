"use client";
import {
  Color,
  Typography,
  TypographyType,
} from "@/components/common/Typography";
import Checkbox from "@mui/material/Checkbox";
import { observer } from "mobx-react-lite";
import { FC } from "react";
import { useToursPageFilterStore } from "../../(model)/context";
import { Title } from "./Title";
import { stars } from "./data";
import styles from "./index.module.scss";

const label = { slotProps: { input: { "aria-label": "Checkbox demo" } } };

export const Raiting: FC = observer(() => {
  const { selectedRatings, onChangeRaiting } = useToursPageFilterStore();
  return (
    <div className={styles.form}>
      <div className={styles.decoration} />
      <Title />
      {stars.map((el) => {
        const isChecked = selectedRatings.includes(el.starsCount);
        return (
          <div key={el.starsCount}>
            <Typography
              as="div"
              type={TypographyType.OVERTITLE}
              color={Color.STARS}
            >
              <div className={styles.wrapper}>
                <Checkbox
                  {...label}
                  checked={isChecked}
                  onChange={() => onChangeRaiting(el.starsCount)}
                />
                <div className={styles.stars}>
                  {"★".repeat(el.starsCount) + "☆".repeat(5 - el.starsCount)}
                </div>
              </div>
            </Typography>
          </div>
        );
      })}
    </div>
  );
});
