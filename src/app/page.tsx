import { AboutUs } from "@/components/pages/Main/AboutUs";
import { Banner } from "@/components/pages/Main/Banner";
import { PopularDestination } from "@/components/pages/Main/PopularDestination";

const Home = () => {
  return (
    <>
      <Banner />
      <AboutUs />
      <PopularDestination />
    </>
  );
};

export default Home;

type Props = {
  title: string;
};
