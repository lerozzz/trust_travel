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
import { days } from "./data";
import styles from "./index.module.scss";

const label = { slotProps: { input: { "aria-label": "Checkbox demo" } } };

export const DateDuration: FC = observer(() => {
  const { selectedNights, onChangeDateDuration } = useToursPageFilterStore();
  return (
    <div className={styles.form}>
      <div className={styles.decoration} />
      <Title />
      {days.map((el) => {
        const isChecked = selectedNights.includes(el.value);
        return (
          <div key={el.value}>
            <Typography
              color={Color.TEXT_PRIMARY}
              type={TypographyType.DESCRIPTION}
            >
              <Checkbox
                {...label}
                checked={isChecked}
                onChange={() => onChangeDateDuration(el.value)}
              />
              {el.value} {el.label}
            </Typography>
          </div>
        );
      })}
    </div>
  );
});
