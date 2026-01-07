import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
//AppRouterInstance — это тип (interface) Next.js, описывающий объект router, который даёт методы:
//push() — перейти на страницу
//replace() — поменять URL без истории
//back() — назад и другие

//RootStore это главный MobX store, который будет хранить глобальное состояние приложения.
export class RootStore {
  _router: AppRouterInstance;
  constructor(params: RootStoreParams) {
    this._router = params.router;
  }
}

type RootStoreParams = {
  router: AppRouterInstance;
};

//RootStore — это место, где мы храним router, чтобы пользоваться им в любом месте приложения.
