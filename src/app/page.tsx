import { AboutUs } from "@/components/pages/Main/AboutUs";
import { Banner } from "@/components/pages/Main/Banner";
import { HotTours } from "@/components/pages/Main/HotTours";
import { PopularDestination } from "@/components/pages/Main/PopularDestination";

const Home = () => {
  return (
    <>
      <Banner />
      <AboutUs />
      <PopularDestination />
      <HotTours />
    </>
  );
};

export default Home;

type Props = {
  title: string;
};
