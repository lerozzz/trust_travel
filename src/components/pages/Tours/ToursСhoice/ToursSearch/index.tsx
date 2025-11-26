"use client";
import { Button, ButtonType } from "@/components/common/Button";
import {
  Color,
  Typography,
  TypographyType,
} from "@/components/common/Typography";
import { FormEvent } from "react";
import { useToursPageFilterStore } from "../../(model)/context";
import { MuiDatePicker } from "./DatePicker";
import { GuestsInput } from "./GuestsInput";
import styles from "./index.module.scss";
import { LocationSelect } from "./LocationSelect";
import { NightsInput } from "./NightsInput";

export const ToursSearch = () => {
  const { fetchToursSearch } = useToursPageFilterStore();

  const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
    fetchToursSearch();
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSearch} className={styles.search_form}>
      <Typography
        type={TypographyType.TITLE}
        as="h1"
        className={styles.title}
        color={Color.TEXT_PRIMARY}
      >
        Поиск туров
      </Typography>
      <LocationSelect />
      <MuiDatePicker />
      <NightsInput />
      <GuestsInput />
      <Button
        rootType="submit"
        type={ButtonType.FILLED_BUTTON_SEARCH}
        as="button"
      >
        <Typography
          type={TypographyType.OVERTITLE}
          color={Color.BACKGROUND}
          className={styles.submit_button}
          as="span"
        >
          Найти
        </Typography>
      </Button>
    </form>
  );
};
