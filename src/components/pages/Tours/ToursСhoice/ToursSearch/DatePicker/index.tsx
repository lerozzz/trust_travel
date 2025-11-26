"use client";
import calendar from "@public/main/calendar.svg";
import { observer } from "mobx-react-lite";
import Image from "next/image";
import { FC } from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";
import { useToursPageFilterStore } from "../../../(model)/context";
import styles from "./index.module.scss";

export const MuiDatePicker: FC = observer(() => {
  const { onChangeDate } = useToursPageFilterStore();

  const today = new DateObject();
  return (
    <div className={styles.calendar_wrapper}>
      <DatePicker
        range
        onChange={onChangeDate}
        minDate={today}
        currentDate={today}
        format="DD.MM.YYYY"
        dateSeparator=" - "
        placeholder="Дата вылета"
        arrow={false}
        inputClass={styles.custom_date_input}
      />
      <Image
        className={styles.image}
        alt="benefit_1"
        width={21}
        height={21}
        src={calendar}
      />
    </div>
  );
});
