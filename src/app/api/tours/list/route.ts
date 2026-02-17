import { TourPageStore } from "@/components/pages/Tours/(model)/store"; //TourPageStore — нужен для доступа к константе TOURS_LIST_LIMIT = 5
// import { NextRequest } from "next/server"; //NextRequest — объект запроса в Next.js
import { allTours as _allTours, Tour } from "./data";
import { ToursReqBody } from "@/utils/requester/trustTravel";

//Это функция, которую Next.js вызывает каждый раз, когда фронтенд делает:
//fetch("/api/tours/list?page=1")

export async function POST(req: Request) {
  try {
    // const searchParams = req.nextUrl.searchParams; //Получение query-параметров
    const body: ToursReqBody = await req.json();
    const {
      page: page_ = 1,
      limit: limit_ = 5,
      location,
      dateFrom,
      dateTo,
      startNight,
      endNight,
      adults,
      children,
      departureCities = [],
    } = body;

    // const pageParam = searchParams.get("page") || 1; //pageParam — номер страницы
    // const limitParam = searchParams.get("limit"); //limitParam — сколько элементов на странице
    // const offsetParam = searchParams.get("offset"); //offsetParam — сколько элементов пропустить (альтернативно page). Если page нет → берётся 1.

    // const location = searchParams.get("location");
    // const dateFrom = searchParams.get("dateFrom");
    // const dateTo = searchParams.get("dateTo");
    // const startNight = searchParams.get("startNight");
    // const endNight = searchParams.get("endNight");
    // const adults = searchParams.get("adultsCount");
    // const children = searchParams.get("childsCount");
    // const departureCities = searchParams.getAll("departureCities");

    // console.log(searchParams);

    // безопасные значения по умолчанию
    const page = typeof page_ !== "number" ? Number(page_) : page_; //+pageParam превращает строку "3" → число 3.
    const defaultLimit = TourPageStore.TOURS_LIST_LIMIT; //Если limit не передали → используется 5

    // если limit передали — приводим его к числу
    // Math.max(1, …) гарантирует, что limit не станет 0 или отрицательным
    const limit = Math.max(1, Number(limit_ ?? defaultLimit) || defaultLimit);
    const offset = Math.max(0, (page - 1) * limit);

    // считаем offset (с какого элемента начать)
    // если параметр offset указан: /api/tours/list?offset=10, то используем его.
    // если offset отсутствует: используем формулу: offset = (page - 1) * limit

    let filteredTours: Tour[] = _allTours; //Получаем все туры

    if (location) {
      filteredTours = filteredTours.filter(
        (tour) => tour.countryCode === location,
      );
    }
    if (dateFrom) {
      filteredTours = filteredTours.filter((tour) => tour.dateFrom >= dateFrom);
    }

    if (dateTo) {
      filteredTours = filteredTours.filter((tour) => tour.dateTo <= dateTo);
    }

    if (startNight) {
      filteredTours = filteredTours.filter(
        (tour) => tour.startNight >= Number(startNight),
      );
    }

    if (endNight) {
      filteredTours = filteredTours.filter(
        (tour) => tour.endNight >= Number(endNight),
      );
    }

    if (adults) {
      filteredTours = filteredTours.filter(
        (tour) => tour.adults >= Number(adults),
      );
    }

    if (children) {
      filteredTours = filteredTours.filter(
        (tour) => tour.children >= Number(children),
      );
    }

    if (departureCities.length > 0) {
      filteredTours = filteredTours.filter((tour) =>
        departureCities.includes(tour.departureCity),
      );
    }

    // slice по offset и limit
    const items = filteredTours.slice(offset, offset + limit);

    const response = {
      items, //текущие 5 туров (или другой лимит)
      maxCount: filteredTours.length, //всего туров (например, 20)
    };

    return new Response(JSON.stringify(response), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
  } catch (err) {
    // логируем ошибку (по желанию)
    console.error("GET /tours error:", err);

    return new Response(
      JSON.stringify({ message: "Internal Server Error", error: String(err) }),
      {
        headers: { "Content-Type": "application/json" },
        status: 500,
      },
    );
  }
}
