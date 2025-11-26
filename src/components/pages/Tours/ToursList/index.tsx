import { Container } from "@common/Container";
import { observer } from "mobx-react-lite";
import { useSearchParams } from "next/navigation";
import { allTours } from "../(model)/data";
import { Cards } from "./Cards";
import { DateDuration } from "./DateDuration";
import { DepatureCities } from "./DepatureCities";
import styles from "./index.module.scss";
import { Pagination } from "./Pagination";
import { Price } from "./Price";
import { Raiting } from "./Raiting";

export const ToursList = observer(() => {
  const searchParams = useSearchParams();
  // useEffect(() => {
  //   const pageFromUrl = searchParams.get("page");
  // }, [searchParams]);

  return (
    <Container>
      <div className={styles.main_wrapper}>
        <div className={styles.filters_wrapper}>
          <DepatureCities />
          <Price />
          <DateDuration />
          <Raiting />
        </div>
        <div className={styles.cards_wrapper}>
          <Cards allTours={allTours} />
        </div>
      </div>
      <Pagination />
    </Container>
  );
});
