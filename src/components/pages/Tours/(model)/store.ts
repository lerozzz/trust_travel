import { Tour } from "@/app/api/tours/list/data";
import { RootStore } from "@/components/AppFrame/(model)/RootStore/store";
import { requester } from "@/utils/requester";
import { makeAutoObservable, runInAction } from "mobx";
import { FilterController } from "./FilterController";
import { PaginationItem } from "./PaginationItem";

export class TourPageStore {
  static TOURS_LIST_LIMIT = 5; // константа лимита туров на страницу

  private readonly _rootStore: RootStore;
  readonly _filterController: FilterController;

  private _maxPageCount: number; // максимальное количество страниц
  private _tourList: Tour[] = []; // массив туров
  private _currentPage: number; // текущая страница
  private _toursListOffset: number = 0;

  constructor(params: TourPageStoreParams) {
    this._rootStore = params.rootStore;
    this._tourList = params.tourList;
    this._maxPageCount = Math.ceil(
      params.maxCount / TourPageStore.TOURS_LIST_LIMIT,
    );
    this._currentPage = params.searchParams.page;

    this._filterController = new FilterController(this.applyFilters);

    makeAutoObservable(this);
  }

  updateTourList = (list: Tour[]) => {
    this._tourList = list;
  };

  //-----------Геттеры----------

  // текущая страница
  get currentPage() {
    return this._currentPage;
  }

  // общее количество страниц
  get pagesCount() {
    return this._maxPageCount;
  }

  // проверка, первая ли страница
  get isFirstPage() {
    return this.currentPage <= 1;
  }

  // проверка, последняя ли страница
  get isLastPage() {
    return this.currentPage >= this._maxPageCount;
  }

  get tourList() {
    return this._tourList;
  }

  get isEmptyTours() {
    return this._tourList.length === 0;
  }

  get paginationItems(): PaginationItem[] {
    const items: PaginationItem[] = []; //Создаём пустой массив items, в который мы будем добавлять объекты для кнопок и многоточий.

    const current = this.currentPage;
    const total = this.pagesCount;

    const addPage = (page: number) => {
      items.push({
        type: "page",
        page,
        isCurrent: page === current,
      });
    };

    const addSeparator = () => {
      items.push({ type: "separator" });
    };

    //  первая страница
    addPage(1);

    //  левая "..."
    if (current > 3) {
      addSeparator();
    }

    //  страницы вокруг текущей
    for (let page = current - 1; page <= current + 1; page++) {
      if (page > 1 && page < total) {
        addPage(page);
      }
    }

    //  правая "..."
    if (current < total - 2) {
      addSeparator();
    }

    //  последняя страница
    if (total > 1) {
      addPage(total);
    }

    // console.log("paginationItems:", items);
    return items;
  }

  //-----------API----------

  // это универсальный метод перехода на ЛЮБУЮ страницу
  goToPage = async (page: number) => {
    if (page < 1 || page > this.pagesCount) return; // защита от неправильных значений

    const response = await requester.trustTravel.postTours({ page }); // запрос на сервер

    //обновляем состояние
    runInAction(() => {
      // сохрани в сторе те туры, которые сервер прислал для этой страницы
      this._tourList = response.items; // items: Tour[]; - массив туров для текущей страницы
      this._currentPage = page;
    });
  };

  // перейти только на предыдущую страницу
  handlePrevPage = async () => {
    if (this.isFirstPage) {
      return;
    }
    const prevPage = this.currentPage - 1;

    const response = await requester.trustTravel.postTours({
      page: this._currentPage - 1,
    });

    runInAction(() => {
      this._tourList = response.items;
      this._currentPage = prevPage;
    });
  };

  //перейти только на следующую страницу
  handleNextPage = async () => {
    if (this.isLastPage) {
      return;
    }
    const nextPage = this.currentPage + 1;

    const response = await requester.trustTravel.postTours({
      page: nextPage,
    });

    runInAction(() => {
      this._tourList = response.items;
      this._currentPage = nextPage;
    });
  };

  applyFilters = async () => {
    const response = await requester.trustTravel.postTours({
      page: 1,
      ...this._filterController.SeacrhParams,
    });
    runInAction(() => {
      this._tourList = response.items;
      this._currentPage = 1;
      this._maxPageCount = Math.ceil(
        response.maxCount / TourPageStore.TOURS_LIST_LIMIT,
      );
    });
  };

  static async init({ page }: TourPageStoreInitParams) {
    return await requester.trustTravel.postTours({ page });
  }
}

type TourPageStoreInitParams = {
  page: number;
};

type TourPageStoreParams = {
  rootStore: RootStore;
  tourList: Tour[];
  maxCount: number;
  searchParams: { page: number };
};
