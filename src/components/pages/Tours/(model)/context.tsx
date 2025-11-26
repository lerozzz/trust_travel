"use client";
import { useRootStore } from "@/components/AppFrame/(model)/RootStore/context";
import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useRef,
} from "react";
import { TourPageStore } from "./store";

const StoreContext = createContext<TourPageStore | null>(null);

export const ToursStoreProvider: FC<PropsWithChildren> = ({ children }) => {
  const rootStore = useRootStore();
  // const store = new TourPageStore();
  const storeRef = useRef<TourPageStore | null>(null);
  if (!storeRef.current) {
    storeRef.current = new TourPageStore({ rootStore });
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
