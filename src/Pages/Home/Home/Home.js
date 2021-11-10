import React from "react";
import Banner from "../Banner/Banner";
import DeliveredProducts from "../DeliveredProducts/DeliveredProducts";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";

const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Banner></Banner>
      <DeliveredProducts></DeliveredProducts>
      <Footer></Footer>
    </div>
  );
};

export default Home;
