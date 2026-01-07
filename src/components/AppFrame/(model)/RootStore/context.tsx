"use client";

import { useRouter } from "next/navigation"; //Он возвращает объект router, который позволяет менять URL.
import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useRef,
} from "react";
import { RootStore } from "./store";

const RootStoreContext = createContext<RootStore | null>(null); //Создаётся контекст, который будет хранить RootStore.
//Начальное значение — null, потому что store ещё не создан.

//RootStoreProvider это компонент, который будет оборачивать всё приложение и давать доступ к RootStore.
export const RootStoreProvider: FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter(); //Получаем объект router от Next.js.
  // const store = new TourPageStore();
  const storeRef = useRef<RootStore | null>(null); //Мы используем useRef, чтобы создать store только один раз.
  //Если store ещё не создан (null)
  //Создаём новый RootStore и кладём его в storeRef.current
  if (!storeRef.current) {
    storeRef.current = new RootStore({ router });
  }
  return (
    <RootStoreContext.Provider value={storeRef.current}>
      {children}
    </RootStoreContext.Provider>
    //Provider предоставляет наш RootStore всем дочерним компонентам (children).
    //Любой компонент ниже в дереве может вызвать: useRootStore() и получить доступ к store.
  );
};

export const useRootStore = () => {
  const store = useContext(RootStoreContext); //Берёт store из контекста.
  if (!store) {
    throw new Error(
      "useRootStore must be used within a RootStoreContext.Provider",
    );
  }
  //Если store == null → бросает ошибку
  //Это защита от использования хука вне Provider.
  return store;
};
