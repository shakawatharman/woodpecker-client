import React from "react";
import Products from "../../Products/Products";
import Banner from "../Banner/Banner";
import DeliveredProducts from "../DeliveredProducts/DeliveredProducts";
import FAQ from "../FAQ/FAQ";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";
import Reviews from "../Reviews/Reviews";

const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Banner></Banner>
     <Products></Products>
      <DeliveredProducts></DeliveredProducts>
      <Reviews></Reviews>
      
      <FAQ></FAQ>
      <Footer></Footer>
    </div>
  );
};

export default Home;
