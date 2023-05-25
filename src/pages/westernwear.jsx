import React from "react";
import HeroProduct from "../components/heroproduct";
import Navbar from "../components/products/westernwear/navbar";
import Product from "../components/products/westernwear/products";

const WesternWear = () => {
  return (
    <>
      <Navbar />
      <HeroProduct />
      <Product />
    </>
  );
};

export default WesternWear;
