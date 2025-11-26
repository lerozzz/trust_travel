"use client";
import { ToursStoreProvider } from "@/components/pages/Tours/(model)/context";
import { ToursList } from "@/components/pages/Tours/ToursList";
import { ToursChoice } from "@/components/pages/Tours/ToursСhoice";

const ToursPage = () => {
  return (
    <ToursStoreProvider>
      <ToursChoice />
      <ToursList />
    </ToursStoreProvider>
  );
};

export default ToursPage;
