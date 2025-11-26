import { RootStore } from "@/components/AppFrame/(model)/RootStore/store";
import { makeAutoObservable } from "mobx";
import { allTours } from "./data";
import { FilterController } from "./FilterController";
import { Tour } from "./type";

export class TourPageStore {
  private readonly _rootStore: RootStore;

  readonly _filterController: FilterController = new FilterController();

  //массивы
  allTours: Tour[] = allTours;
  filteredTours: Tour[] = allTours;

  //пагинация
  private _currentPage: number = 1;
  private _tourListLimit: number = 5;
  private _toursListOffset: number = 0;
  // visibleCount: number = 5;

  constructor(params: TourPageStoreParams) {
    this._rootStore = params.rootStore;

    makeAutoObservable(this);
  }
}

type TourPageStoreParams = {
  rootStore: RootStore;
};
