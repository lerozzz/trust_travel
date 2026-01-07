import { ToursStoreProvider } from "@/components/pages/Tours/(model)/context";
import { TourPageStore } from "@/components/pages/Tours/(model)/store";
import { ToursList } from "@/components/pages/Tours/ToursList";
import { ToursChoice } from "@/components/pages/Tours/ToursСhoice";

import { FC } from "react";
type ToursPageProps = {
  searchParams: Promise<{ page: string }>;
};

const ToursPage: FC<ToursPageProps> = async ({ searchParams }) => {
  const page = Number((await searchParams).page) || 1;
  const { items: tourList, maxCount } = await TourPageStore.init({ page });

  return (
    <ToursStoreProvider
      initData={{ maxCount, tourList }}
      searchParams={{ page }}
    >
      <ToursChoice />
      <ToursList />
    </ToursStoreProvider>
  );
};

export default ToursPage;
