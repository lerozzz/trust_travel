import { Tour } from "@/app/api/tours/list/data";
import { RequesterInstance } from "./instance";

export class TrustTravelApi extends RequesterInstance {
  constructor(params: TrustTravelApiParams) {
    super({ baseURL: params.baseURL });
  }
  //TrustTravelApi наследуется от RequesterInstance
  //То есть он получает: axios instance и метод get() и возможность расширять методы

  getTours = async (params: GetToursReqParams) => {
    return this.get<GetToursReqParams, GetToursRes>("/tours/list", {
      params,
    });
  };
}

type TrustTravelApiParams = {
  baseURL: string;
};

type GetToursReqParams = {
  page: number;
  limit?: number;
};

type GetToursRes = {
  items: Tour[];
  maxCount: number;
};
