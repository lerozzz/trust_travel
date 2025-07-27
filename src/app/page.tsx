import { AboutUs } from "@/components/pages/Main/AboutUs";
import { Banner } from "@/components/pages/Main/Banner";
import { Countries } from "@/components/pages/Main/Countries";
import { HotTours } from "@/components/pages/Main/HotTours";
import { PopularDestination } from "@/components/pages/Main/PopularDestination";
import { Reviews } from "@/components/pages/Main/Reviews";
import { TourPackages } from "@/components/pages/Main/TourPackages";

const Home = () => {
  return (
    <>
      <Banner />
      <AboutUs />
      <PopularDestination />
      <HotTours />
      <Countries />
      <TourPackages />
      <Reviews /> 
    </>
  );
};

export default Home;

type Props = {
  title: string;
};
