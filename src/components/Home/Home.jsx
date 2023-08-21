import React, { Fragment } from "react";
import Header from "./Header";
import Features from "./Features";
import Testimonials from "./Testimonials";
import Cta from "../Cta/Cta";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <Features />
      <Testimonials />
      <Cta />
    </Fragment>
  );
};

export default Home;
