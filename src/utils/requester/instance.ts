//Это — базовый класс, который управляет axios.
import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

export class RequesterInstance {
  private instance: AxiosInstance;

  constructor(params: RequesterInstanceParams) {
    const { baseURL } = params;
    this.instance = axios.create({ baseURL });
  } //Этот класс создаёт axios instance — свою собственную копию axios с базовым URL.

  get = async <G, D>(
    url: string,
    config?: {
      params: G; //G — тип входящих параметров (например { page: number })
      other?: AxiosRequestConfig<unknown>;
    },
  ): Promise<D> => {
    //D — тип ответа от сервера (например { items: Tour[]; maxCount: number })
    const response = await this.instance.get(url, config);
    return response.data;
  };
}
//Это универсальный GET-запрос.
//Он принимает: url — строку /tours/list и config — объект, содержащий параметры
//И возвращает response.data — данные с сервера.

type RequesterInstanceParams = {
  baseURL: string;
};
