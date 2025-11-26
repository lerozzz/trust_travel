import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export class RootStore {
  _router: AppRouterInstance;
  constructor(params: RootStoreParams) {
    this._router = params.router;
  }
}

type RootStoreParams = {
  router: AppRouterInstance;
};
