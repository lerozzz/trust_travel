import { makeAutoObservable, runInAction, toJS } from "mobx";
import { DateObject } from "react-multi-date-picker";
import { Country } from "../ToursСhoice/ToursSearch/LocationSelect/data";
import { GuestType } from "./type";

export class FilterController {
  static INIT_PRICE_RANGE: [number, number] = [0, 1000000];
  //TourSearch
  adultsCount: number = 0;
  childsCount: number = 0;
  location: Country | null = null;
  dateFrom: number | null = null;
  dateTo: number | null = null;
  startNight: number | null = null;
  endNight: number | null = null;

  //ToursList
  selectedDepartureCities: string[] = [];
  selectedRatings: number[] = [];
  selectedNights: number[] = [];
  priceRange: [number, number] = FilterController.INIT_PRICE_RANGE;

  constructor() {
    makeAutoObservable(this);
  }

  private _handleGuests = (type: GuestType, operation: "inc" | "dec") => {
    if (type === GuestType.ADULT) {
      if (operation === "inc") {
        this.adultsCount++;
      } else {
        this.adultsCount--;
      }
    } else {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      operation === "inc" ? this.childsCount++ : this.childsCount--;
    }
  };

  private _guestsIncrease = (type: GuestType) => {
    if (this.adultsCount <= 0 && type === GuestType.CHILD) {
      return;
    }

    this._handleGuests(type, "inc");
  };

  private _guestsDecrease = (type: GuestType) => {
    if (this.adultsCount <= 0 || this.childsCount <= 0) {
      return;
    }

    if (
      this.adultsCount <= 1 &&
      this.childsCount >= 1 &&
      type === GuestType.ADULT
    ) {
      this.childsCount = 0;
    }

    this._handleGuests(type, "dec");
  };

  onChangePrice = (
    event: Event | React.SyntheticEvent,
    newValue: number | number[],
  ) => {
    if (Array.isArray(newValue)) {
      runInAction(() => {
        this.priceRange = [newValue[0], newValue[1]];
      });
    }
    console.log(this.priceRange);
  };

  onChangeDepatureCities = (cityName: string) => {
    // console.log(this.selectedDepartureCities);
    const index = this.selectedDepartureCities.indexOf(cityName);
    if (index === -1) {
      this.selectedDepartureCities.push(cityName);
    } else {
      this.selectedDepartureCities.splice(index, 1);
    }
    console.log("Выбранные города:", toJS(this.selectedDepartureCities));
  };

  onChangeDateDuration = (value: number) => {
    // console.log(this.selectedNights);
    const index = this.selectedNights.indexOf(value);
    if (index === -1) {
      this.selectedNights.push(value);
    } else {
      this.selectedNights.splice(index, 1);
    }
    console.log("Выбранное количество ночей:", toJS(this.selectedNights));
  };

  onChangeRaiting = (starsCount: number) => {
    const index = this.selectedRatings.indexOf(starsCount);
    if (index === -1) {
      this.selectedRatings.push(starsCount);
    } else {
      this.selectedRatings.splice(index, 1);
    }
    console.log("Выбранный рейтинг:", toJS(this.selectedRatings));
  };

  onChangeLocation = (value: Country | null) => {
    this.location = value;
  };

  onChangeDate = (value: DateObject[] | null) => {
    const [dateFrom, dateTo] = value || [];

    const dateFromFormatted = dateFrom ? dateFrom.unix : null;
    const dateToFormatted = dateTo ? dateTo.unix : null;

    this.dateFrom = dateFromFormatted;
    this.dateTo = dateToFormatted;
  };

  onChangeNights = (value: DateObject[] | null) => {
    const [startNight, endNight] = value || [];

    const nightFromFormatted = startNight ? startNight.day : null;
    const nightToFormatted = endNight ? endNight.day : null;

    this.startNight = nightFromFormatted;
    this.endNight = nightToFormatted;
  };

  fetchToursSearch = () => {
    console.log(
      "Параметры поиска:",
      toJS(this.location),
      toJS(this.dateFrom),
      toJS(this.dateTo),
      toJS(this.startNight),
      toJS(this.endNight),
      toJS(this.adultsCount),
      toJS(this.childsCount),
    );
  };

  adultIncrease = () => {
    this._guestsIncrease(GuestType.ADULT);
  };
  adultDecrease = () => {
    this._guestsDecrease(GuestType.ADULT);
  };

  childIncrease = () => {
    this._guestsIncrease(GuestType.CHILD);
  };
  childDecrease = () => {
    this._guestsDecrease(GuestType.CHILD);
  };

  updateTours = async () => {
    // const searchParams = new URLSearchParams(
    //   JSON.stringify({
    //     rating: this._rating,
    //     dateStart: this.dateStart,
    //     dateEnd: this.dateEnd,
    //   }),
    // ).toString();
    // try {
    //   const responseToursList = await fetch(`/api/tours/list?${searchParams}`, {
    //     method: "GET",
    //   });
    //   if (!responseToursList.ok) {
    //     throw Error();
    //   }
    //   const newToursList = await responseToursList.json();
    //   console.log(newToursList);
    //   this.toursList = newToursList;
    // } catch (error) {
    //   console.error(error);
    // }
  };
}
