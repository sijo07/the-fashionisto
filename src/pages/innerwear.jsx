import React from "react";
import HeroProduct from "../components/heroproduct";
import Navbar from "../components/products/innerwear/navbar";
import Product from "../components/products/innerwear/products";

const InnerWear = () => {
  return (
    <>
      <Navbar />
      <HeroProduct />
      <Product />
    </>
  );
};

export default InnerWear;
