import { ALL_TOURS } from "@/components/pages/Tours/(model)/data";

export async function GET() {
  // const searchParams = request.nextUrl.searchParams;

  // const rating = searchParams.getAll("rating").map(Number);
  // const dateStart = Number(searchParams.get("dateStart"));
  // const dateEnd = Number(searchParams.get("dateEnd"));

  // console.log("rating =", rating);
  // console.log("dateStart =", dateStart);
  // console.log("dateEnd =", dateEnd);

  const first = ALL_TOURS;

  return new Response(JSON.stringify(first), {
    headers: { "Content-Type": "application/json" },
    status: 200,
  });
}
