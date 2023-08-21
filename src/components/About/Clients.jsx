import React, { Fragment } from "react";
import icon_one from "../../assets/Object.svg";
import icon_two from "../../assets/Object-1.svg";
import icon_three from "../../assets/Object-2.svg";
import icon_four from "../../assets/Object-3.svg";
import icon_five from "../../assets/Object-4.svg";

const Clients = () => {
  return (
    <Fragment>
      <div className="bg-[url('/src/assets/clients-bg-mobile.png')] lg:bg-[url('/src/assets/clients-bg.png')] bg-cover">
        <div className="container mx-auto flex flex-col items-center gap-16 py-40">
          <h2 className="text-center lg:text-start text-[32px] lg:text-5xl">
            Some of our clients
          </h2>
          <div className="flex flex-col lg:flex-row gap-20">
            <img src={icon_one} alt="" />
            <img src={icon_two} alt="" />
            <img src={icon_three} alt="" />
            <img src={icon_four} alt="" />
            <img src={icon_five} alt="" />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Clients;
