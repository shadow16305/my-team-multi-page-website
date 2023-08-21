import React, { Fragment, useState } from "react";
import logo from "../../assets/myteam 2.svg";
import openNav from "../../assets/openNavbar.svg";
import closeNav from "../../assets/closeNavbar.svg";

const Navbar = ({ value }) => {
  const activeButtonIndex = value.activeButtonIndex;
  const setActiveButtonIndex = value.setActiveButtonIndex;

  const [isOpen, setIsOpen] = useState(true);
  const setShowHome = value.setShowHome;
  const setShowAbout = value.setShowAbout;
  const setShowContact = value.setShowContact;

  const toggleHandler = () => {
    setIsOpen(!isOpen);
  };

  const navButtons = [
    {
      name: "home",
      id: "0",
    },
    {
      name: "about",
      id: "1",
    },
  ];

  const switchPageHandler = (id) => {
    const toggleMap = {
      home: setShowHome,
      about: setShowAbout,
      contact: setShowContact,
    };
    const toggleFunction = toggleMap[id];
    if (toggleFunction) {
      if (activeButtonIndex === id) {
        return;
      }
      Object.keys(toggleMap).forEach((key) => {
        if (key !== id) {
          toggleMap[key](false);
        }
      });
      toggleFunction((prevState) => !prevState);
      setActiveButtonIndex(id);
    }
  };

  return (
    <Fragment>
      {/* DESKTOP */}
      <nav className="w-full mx-auto justify-between py-6 px-20 fixed bg-midnightGreen hidden lg:flex z-10">
        <div className="flex justify-start gap-10 items-center">
          <a href="#">
            <img src={logo} alt="" />
          </a>
          <ul className="list-none flex lg:flex-row gap-10">
            {navButtons.map((elem) => (
              <li key={elem.id}>
                <button
                  className="text-white hover:text-coral transition-[0.25s]"
                  onClick={() => {
                    switchPageHandler(elem.name);
                  }}
                  key={elem.id}
                >
                  {elem.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-end">
          <button
            className="text-white text-lg font-semibold leading-7 border-2 rounded-3xl px-6 py-2 hover:bg-white hover:text-darkGreen hover:border-white transition-[0.25s]"
            onClick={(event) => {
              switchPageHandler(event.target.name);
            }}
            name="contact"
          >
            contact us
          </button>
        </div>
      </nav>

      {/* MOBILE */}
      <nav className="lg:hidden flex justify-between container px-5 py-10 fixed bg-[#014e56] z-10">
        <a href="">
          <img src={logo} alt="" />
        </a>
        <button onClick={toggleHandler} className={isOpen ? "block" : "hidden"}>
          <img src={openNav} alt="" />
        </button>
        <div
          className={
            isOpen
              ? "hidden"
              : "#000] flex justify-end absolute w-full top-0 right-0 h-screen"
          }
        >
          <div className="bg-[#00000080] w-[30%]" onClick={toggleHandler}></div>
          <div className="flex flex-col bg-[url('/src/assets/mobileNav.png')] h-full w-[70%]">
            <button
              className="pb-10 pt-12 pe-5 flex justify-end"
              onClick={toggleHandler}
            >
              <img src={closeNav} alt="" />
            </button>
            <ul className="list-none flex flex-col gap-7 px-10">
              {navButtons.map((elem) => (
                <li key={elem.id}>
                  <button
                    className="text-white"
                    onClick={() => {
                      switchPageHandler(elem.name);
                    }}
                    key={elem.id}
                  >
                    {elem.name}
                  </button>
                </li>
              ))}
            </ul>
            <div className="ps-8">
              <button
                className="text-white text-[18px] font-semibold leading-7 border-2 rounded-3xl px-6 py-2 mt-10"
                name="contact"
                onClick={(event) => {
                  switchPageHandler(event.target.name);
                }}
              >
                contact us
              </button>
            </div>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
