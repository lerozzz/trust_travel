"use client";
import clock from "@public/main/clock.svg";
import { observer } from "mobx-react-lite";
import Image from "next/image";
import { FC } from "react";
import DatePicker from "react-multi-date-picker";

import { useToursPageFilterStore } from "@/components/pages/Tours/(model)/context";
import styles from "./index.module.scss";

export const NightsInput: FC = observer(() => {
  const { onChangeNights } = useToursPageFilterStore();
  return (
    <div className={styles.nights_wrapper}>
      <DatePicker
        range
        onChange={onChangeNights}
        highlightToday={false}
        hideWeekDays
        hideYear
        hideMonth
        buttons={false}
        format="D"
        dateSeparator=" - "
        placeholder="Ночей"
        arrow={false}
        inputClass={styles.custom_date_input}
      />
      <Image
        className={styles.image}
        alt="benefit_1"
        width={21}
        height={21}
        src={clock}
      />
    </div>
  );
});
