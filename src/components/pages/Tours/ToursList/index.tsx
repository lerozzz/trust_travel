"use client";
import { Container } from "@common/Container";
import { observer } from "mobx-react-lite";

import { useToursPageStore } from "../(model)/context";
import { Cards } from "./Cards";
import { DateDuration } from "./DateDuration";
import { DepatureCities } from "./DepatureCities";
import styles from "./index.module.scss";
import { Pagination } from "./Pagination";
import { Price } from "./Price";
import { Raiting } from "./Raiting";

export const ToursList = observer(() => {
  const { tourList, isEmptyTours } = useToursPageStore();

  return (
    <Container>
      <div className={styles.main_wrapper}>
        <div className={styles.filters_wrapper}>
          <DepatureCities />
          <Price />
          <DateDuration />
          <Raiting />
        </div>
        <Cards isEmptyTours={isEmptyTours} allTours={tourList} />
      </div>
      <div className={styles.pagination_wrapper}>
        <Pagination />
      </div>
    </Container>
  );
});
