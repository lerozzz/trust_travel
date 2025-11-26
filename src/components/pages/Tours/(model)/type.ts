import { StaticImageData } from "next/image";
export enum GuestType {
  ADULT,
  CHILD,
}

export type Tour = {
  id: number;
  country: string;
  countryCode: string;
  departureCity: string;
  dateFrom: string;
  dateTo: string;
  startNight: number;
  endNight: number;
  rating: number;
  price: number;
  adults: number;
  children: number;
  hotelName: string;
  city: string;
  image: string | StaticImageData;
  description: string;
};
