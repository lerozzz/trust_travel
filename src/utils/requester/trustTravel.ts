import { Tour } from "@/app/api/tours/list/data";
import { RequesterInstance } from "./instance";

export class TrustTravelApi extends RequesterInstance {
  constructor(params: TrustTravelApiParams) {
    super({ baseURL: params.baseURL });
  }
  //TrustTravelApi наследуется от RequesterInstance
  //То есть он получает: axios instance и метод get() и возможность расширять методы

  // getTours = async (params: GetToursReqParams) => {
  //   return this.get<GetToursReqParams, GetToursRes>("/tours/list", {
  //     params,
  //   });
  // };

  postTours = async (body: ToursReqBody) => {
    return this.post<ToursReqBody, GetToursRes>("/tours/list", {
      body,
    });
  };
}

type TrustTravelApiParams = {
  baseURL: string;
};

// type GetToursReqParams = {
//   page: number;
//   limit?: number;
// };

export type ToursReqBody = {
  page: number;
  limit?: number;
  location?: string | null;
  dateFrom?: string | null;
  dateTo?: string | null;
  startNight?: number | null;
  endNight?: number | null;
  adults?: number;
  children?: number;
  departureCities?: string[];
  priceFrom?: number;
};

// что возвращает сервер (response)
type GetToursRes = {
  items: Tour[];
  maxCount: number;
};
