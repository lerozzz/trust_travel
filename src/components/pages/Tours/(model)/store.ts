import { Tour } from "@/app/api/tours/list/data";
import { RootStore } from "@/components/AppFrame/(model)/RootStore/store";
import { requester } from "@/utils/requester";
import { makeAutoObservable, runInAction } from "mobx";
import { FilterController } from "./FilterController";

export class TourPageStore {
  static TOURS_LIST_LIMIT = 5;

  private readonly _rootStore: RootStore;

  readonly _filterController: FilterController = new FilterController();
  private readonly _maxPageCount: number;

  //массивы
  private _tourList: Tour[] = [];

  //пагинация
  private _currentPage: number;
  private _toursListOffset: number = 0;

  constructor(params: TourPageStoreParams) {
    this._rootStore = params.rootStore;
    this._tourList = params.tourList;
    this._maxPageCount = Math.ceil(
      params.maxCount / TourPageStore.TOURS_LIST_LIMIT,
    );
    this._currentPage = params.searchParams.page;

    makeAutoObservable(this);
  }

  get currentPage() {
    return this._currentPage;
  }

  get isFirstPage() {
    return this._currentPage <= 1;
  }

  get isLastPage() {
    return this._currentPage >= this._maxPageCount;
  }

  get tourList() {
    return this._tourList;
  }

  get isEmptyTours() {
    return this._tourList.length > 0 ? true : false;
  }

  handlePrevPage = async () => {
    if (this.isFirstPage) {
      return;
    }
    const prevPage = this._currentPage - 1;
    const response = await requester.trustTravel.getTours({
      page: this._currentPage - 1,
    });

    runInAction(() => {
      this._tourList = response.items;
      this._currentPage = prevPage;
    });
  };
  handleNextPage = async () => {
    if (this.isLastPage) {
      return;
    }
    const nextPage = this._currentPage + 1;

    const response = await requester.trustTravel.getTours({
      page: nextPage,
    });

    runInAction(() => {
      this._tourList = response.items;
      this._currentPage = nextPage;
    });
  };

  static async init({ page }: TourPageStoreInitParams) {
    return await requester.trustTravel.getTours({ page });
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
