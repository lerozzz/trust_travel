"use client";
import { Tour } from "@/app/api/tours/list/data";
import { useRootStore } from "@/components/AppFrame/(model)/RootStore/context";
import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useRef,
} from "react";
import { TourPageStore } from "./store";

type ToursStoreProviderProps = PropsWithChildren<{
  initData: { tourList: Tour[]; maxCount: number };
  searchParams: { page: number };
}>;

const StoreContext = createContext<TourPageStore | null>(null);

export const ToursStoreProvider: FC<ToursStoreProviderProps> = (props) => {
  const {
    children,
    initData: { maxCount, tourList },
    searchParams: { page },
  } = props;
  const rootStore = useRootStore();

  const storeRef = useRef<TourPageStore | null>(null);
  if (!storeRef.current) {
    storeRef.current = new TourPageStore({
      rootStore,
      tourList,
      maxCount,
      searchParams: { page },
    });
  }
  return (
    <StoreContext.Provider value={storeRef.current}>
      {children}
    </StoreContext.Provider>
  );
};

export const useToursPageStore = () => {
  const store = useContext(StoreContext);
  if (!store) {
    throw new Error(
      "useToursPageStore must be used within a ToursStoreProvider",
    );
  }
  return store;
};

export const useToursPageFilterStore = () =>
  useToursPageStore()._filterController;
