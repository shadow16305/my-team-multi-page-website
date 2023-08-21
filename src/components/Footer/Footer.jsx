import React, { Fragment } from "react";
import logo from "../../assets/myteam 2.svg";
import facebook from "../../assets/facebook.svg";
import pinterest from "../../assets/pinterest.svg";
import twitter from "../../assets/twitter.svg";

const Footer = () => {
  return (
    <Fragment>
      <div className="bg-darkGreen">
        <div className="container mx-auto flex flex-col lg:flex-row lg:justify-center items-center lg:items-start gap-10 lg:gap-72 py-20">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-32">
            <div className="flex flex-col gap-8 items-center lg:items-start">
              <img src={logo} alt="" />
              <div className="flex gap-12">
                <button className="text-white hover:text-coral transition-[0.25s]">
                  home
                </button>
                <button className="text-white hover:text-coral transition-[0.25s]">
                  about
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-2 text-center lg:text-start">
              <p className="body-2">987 Hillcrest Lane</p>
              <p className="body-2">Irvine, CA</p>
              <p className="body-2">California 92714</p>
              <p className="body-2">Call Us : 949-833-7432</p>
            </div>
          </div>
          <div className="flex flex-col gap-16 justify-center items-center lg:items-end">
            <div className="flex gap-6">
              <a href="">
                {" "}
                <img src={facebook} alt="" />
              </a>
              <a href="">
                {" "}
                <img src={pinterest} alt="" />
              </a>
              <a href="">
                <img src={twitter} alt="" />
              </a>
            </div>
            <p className="body-2">Copyright 2020. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
