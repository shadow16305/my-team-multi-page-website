import React, { Fragment } from "react";
import Header from "./Header";
import Directors from "./Directors";
import Clients from "./Clients";
import Cta from "../Cta/Cta";

const About = () => {
  return (
    <Fragment>
      <Header />
      <Directors />
      <Clients />
      <Cta />
    </Fragment>
  );
};

export default About;
