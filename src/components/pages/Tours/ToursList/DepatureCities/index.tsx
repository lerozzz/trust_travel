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
import { cities } from "./data";
import styles from "./index.module.scss";
import { Title } from "./Title";
import { useSearchParams } from "next/navigation";

const label = { slotProps: { input: { "aria-label": "Checkbox demo" } } };

export const DepatureCities: FC = observer(() => {
  const searchParams = useSearchParams();
  console.log(searchParams, 32132);

  const { selectedDepartureCities, onChangeDepatureCities } =
    useToursPageFilterStore();

  return (
    <div className={styles.form}>
      <div className={styles.decoration} />
      <Title />
      {cities.map((el) => {
        const isChecked = selectedDepartureCities.includes(el.cityName);
        return (
          <div key={el.cityName} className={styles.cityItem}>
            <Typography
              color={Color.TEXT_PRIMARY}
              type={TypographyType.DESCRIPTION}
            >
              <Checkbox
                {...label}
                checked={isChecked}
                onChange={() => onChangeDepatureCities(el.cityName)}
              />
              {el.cityName}
            </Typography>
          </div>
        );
      })}
    </div>
  );
});
