import React, { Fragment, useState } from "react";
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";

const Main = () => {
  const [showHome, setShowHome] = useState(true);
  const [showAbout, setShowAbout] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const [activeButtonIndex, setActiveButtonIndex] = useState("home");

  const setters = {
    activeButtonIndex,
    setActiveButtonIndex,
    setShowHome,
    setShowAbout,
    setShowContact,
  };

  return (
    <Fragment>
      <Navbar value={setters} />
      {showHome && <Home />}
      {showAbout && <About />}
      {showContact && <Contact />}
      <Footer />
    </Fragment>
  );
};

export default Main;
