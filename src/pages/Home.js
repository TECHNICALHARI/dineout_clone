import React from "react";
import Banner from "../components/home/Banner";
import OffersSection from "../components/home/OfferSection";
import DiningSection from "../components/home/DiningSection";
import RestaurantsNearYouSection from "../components/home/RestaurantsNearYouSection";

const Home = () => {
  return (
    <div>
      <Banner />
      <OffersSection />
      <RestaurantsNearYouSection />
      <DiningSection />
    </div>
  );
};

export default Home;
