"use client";

import { observer } from "mobx-react-lite";
import { FC } from "react";
import { useToursPageStore } from "../../(model)/context";

export const Pagination: FC = observer(() => {
  const {} = useToursPageStore();

  return null;

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
