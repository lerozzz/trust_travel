"use client";

import { useRouter } from "next/navigation";
import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useRef,
} from "react";
import { RootStore } from "./store";

const RootStoreContext = createContext<RootStore | null>(null);

export const RootStoreProvider: FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter();
  // const store = new TourPageStore();
  const storeRef = useRef<RootStore | null>(null);
  if (!storeRef.current) {
    storeRef.current = new RootStore({ router });
  }
  return (
    <RootStoreContext.Provider value={storeRef.current}>
      {children}
    </RootStoreContext.Provider>
  );
};

export const useRootStore = () => {
  const store = useContext(RootStoreContext);
  if (!store) {
    throw new Error(
      "useRootStore must be used within a RootStoreContext.Provider",
    );
  }
  return store;
};
