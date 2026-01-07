// Это как единый API-клиент, через который UI и Store получают данные.
import { TrustTravelApi } from "./trustTravel"; //import класса trust travel в нем методы getTours и тд

export const requester = {
  trustTravel: new TrustTravelApi({ baseURL: "http://localhost:3000/api" }),
}; //создан обьект requester
// он содержит ключ trustTravel и значение новый объект TrustTravelApi
//Теперь в любом месте приложения можно написать: requester.trustTravel.getTours() и получить данные с сервера.
