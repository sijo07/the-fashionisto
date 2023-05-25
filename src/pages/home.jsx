import React from "react";
import HeroMain from "../components/heromain";
import { Category } from "../components";
import BestSellers from '../components/bestsellers'

const Home = () => {
  return (
    <>
      <HeroMain />
      <Category />
      <BestSellers />
    </>
  );
};

export default Home;
