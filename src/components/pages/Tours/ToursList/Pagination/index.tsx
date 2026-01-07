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

export const Pagination: FC = observer(() => {
  const {
    currentPage,
    isLastPage,
    isFirstPage,
    handleNextPage,
    handlePrevPage,
    tourList,
  } = useToursPageStore();

  console.log(toJS(tourList));
  return (
    <div className={styles.main_wrapper}>
      <Button
        as="button"
        onClick={handlePrevPage}
        disabled={isFirstPage}
        type={ButtonType.OTLINE_BUTTON_PAGINATION}
      >
        {"<"}
      </Button>

      <Button as="button" type={ButtonType.OTLINE_BUTTON_PAGINATION}>
        <Typography color={Color.PRIMARY} type={TypographyType.OVERTITLE}>
          {currentPage}
        </Typography>
      </Button>

      <Button
        as="button"
        onClick={handleNextPage}
        disabled={isLastPage}
        type={ButtonType.OTLINE_BUTTON_PAGINATION}
      >
        {">"}
      </Button>
    </div>
  );

  // return (
  //   <div className={styles.main_wrapper}>
  //     {currentPage > 0 && (
  //       <Button
  //         as="button"
  //         onClick={handlePrevGroup}
  //         type={ButtonType.OTLINE_BUTTON_PAGINATION}
  //       >
  //         <Typography
  //           type={TypographyType.OVERTITLE}
  //           color={Color.TEXT_PRIMARY}
  //         >
  //           {"<"}
  //         </Typography>
  //       </Button>
  //     )}

  //     {visiblePages.map((el, index) => {
  //       const realIndex = (currentPage - 1) * pageSize + index;
  //       const isActive = activePage === index + 1;

  //       return (
  //         <div key={realIndex}>
  //           <Button
  //             as="button"
  //             onClick={() => setActivePage(index + 1)}
  //             type={
  //               isActive
  //                 ? ButtonType.FILLED_BUTTON_PAGINATION
  //                 : ButtonType.OTLINE_BUTTON_PAGINATION
  //             }
  //           >
  //             <Typography
  //               type={TypographyType.OVERTITLE}
  //               color={Color.TEXT_PRIMARY}
  //             >
  //               {el.id}
  //             </Typography>
  //           </Button>
  //         </div>
  //       );
  //     })}

  //     {currentPage + visibleCount < visiblePages.length && (
  //       <Button
  //         as="button"
  //         onClick={handleNextGroup}
  //         type={ButtonType.OTLINE_BUTTON_PAGINATION}
  //       >
  //         <Typography
  //           type={TypographyType.OVERTITLE}
  //           color={Color.TEXT_PRIMARY}
  //         >
  //           {">"}
  //         </Typography>
  //       </Button>
  //     )}
  //   </div>
  // );
});
