"use client";

import { Button, ButtonType } from "@/components/common/Button";
import {
  Color,
  Typography,
  TypographyType,
} from "@/components/common/Typography";
import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import { FC } from "react";
import { useToursPageStore } from "../../(model)/context";
import styles from "./index.module.scss";
import { useRouter, useSearchParams } from "next/navigation";

export const Pagination: FC = observer(() => {
  const {
    isLastPage,
    isFirstPage,
    currentPage,
    tourList,
    paginationItems,
    goToPage,
  } = useToursPageStore();

  const router = useRouter();
  const searchParams = useSearchParams();

  const changePage = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", String(page));
    router.push(`?${params.toString()}`);
    goToPage(page);
  };

  console.log(toJS(tourList));
  // console.log("from component paginationItems:", paginationItems);

  return (
    <div className={styles.main_wrapper}>
      <Button
        as="button"
        onClick={() => changePage(currentPage - 1)}
        disabled={isFirstPage}
        type={ButtonType.OTLINE_BUTTON_PAGINATION}
      >
        <Typography type={TypographyType.OVERTITLE} color={Color.TEXT_PRIMARY}>
          {"<"}
        </Typography>
      </Button>

      {paginationItems.map((item, index) => {
        if (item.type == "separator") {
          return (
            <span key={`sep-${index}`} className={styles.separator}>
              <Typography
                type={TypographyType.OVERTITLE}
                color={Color.TEXT_PRIMARY}
              >
                …
              </Typography>
            </span>
          );
        }
        return (
          <Button
            key={`page-${item.page}`}
            as="button"
            onClick={() => changePage(item.page)}
            type={
              item.isCurrent
                ? ButtonType.FILLED_BUTTON_PAGINATION
                : ButtonType.OTLINE_BUTTON_PAGINATION
            }
          >
            <Typography
              color={item.isCurrent ? Color.BACKGROUND : Color.PRIMARY}
              type={TypographyType.OVERTITLE}
            >
              {item.page}
            </Typography>
          </Button>
        );
      })}

      <Button
        as="button"
        onClick={() => changePage(currentPage + 1)}
        disabled={isLastPage}
        type={ButtonType.OTLINE_BUTTON_PAGINATION}
      >
        <Typography type={TypographyType.OVERTITLE} color={Color.TEXT_PRIMARY}>
          {">"}
        </Typography>
      </Button>
    </div>
  );
});
