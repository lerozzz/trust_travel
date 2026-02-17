export type PaginationItem =
  | {
      type: "page"; // обычная кнопка с номером
      page: number; // номер страницы
      isCurrent: boolean; // текущая страница
    }
  | {
      type: "separator"; // многоточие "…"
    };
