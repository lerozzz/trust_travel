import { TourPageStore } from "@/components/pages/Tours/(model)/store"; //TourPageStore — нужен для доступа к константе TOURS_LIST_LIMIT = 5
import { NextRequest } from "next/server"; //NextRequest — объект запроса в Next.js
import { allTours as _allTours, Tour } from "./data";

//Это функция, которую Next.js вызывает каждый раз, когда фронтенд делает:
//fetch("/api/tours/list?page=1")

export async function GET(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams; //Получение query-параметров

    const pageParam = searchParams.get("page") || 1; //pageParam — номер страницы
    const limitParam = searchParams.get("limit"); //limitParam — сколько элементов на странице
    const offsetParam = searchParams.get("offset"); //offsetParam — сколько элементов пропустить (альтернативно page). Если page нет → берётся 1.

    console.log(searchParams);

    // безопасные значения по умолчанию
    const page = pageParam ? +pageParam : 1; //+pageParam превращает строку "3" → число 3.
    const defaultLimit = TourPageStore.TOURS_LIST_LIMIT; //Если limit не передали → используется 5

    //Если limit передали — приводим его к числу
    //Math.max(1, …) гарантирует, что limit не станет 0 или отрицательным
    const limit = Math.max(
      1,
      Number(limitParam ?? defaultLimit) || defaultLimit,
    );

    //Считаем offset (с какого элемента начать)
    // Если параметр offset указан: /api/tours/list?offset=10, то используем его.
    //Если offset отсутствует: используем формулу: offset = (page - 1) * limit
    const offset =
      offsetParam != null && offsetParam !== ""
        ? Math.max(0, Number(offsetParam))
        : (page - 1) * limit;

    const allTours: Tour[] = _allTours; //Получаем все туры

    // slice по offset и limit
    const items = allTours.slice(offset, offset + limit);

    const response = {
      items, //текущие 5 туров (или другой лимит)
      maxCount: allTours.length, //всего туров (например, 20)
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
