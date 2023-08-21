import React, { Fragment } from "react";

import Form from "./Form";

import iconOne from "../../assets/Group 11.svg";
import iconTwo from "../../assets/Group 12.svg";
import iconThree from "../../assets/Group 13.svg";

const Contact = () => {
  return (
    <Fragment>
      <div className="bg-['/src/assets/contact-bg-mobile.png'] lg:bg-[src/assets/contact-bg.png] bg-cover bg-no-repeat">
        <div className="container mx-auto flex flex-col lg:flex-row justify-center py-36 gap-20 lg:gap-36">
          <div className="flex flex-col items-center lg:items-start gap-10 md:gap-6 lg:gap-10">
            <h2>Contact</h2>
            <h5 className="text-coral text-[32px] font-bold">Ask us about</h5>
            <div className="flex flex-col items-center lg:items-start md:flex-row text-center gap-4 lg:gap-0">
              <img src={iconOne} alt="" className="w-[72px] h-[72px]" />
              <div className="flex flex-col lg:ps-5">
                <p className="body-2 mt-3">The quality of our talent network</p>
              </div>
            </div>
            <div className="flex flex-col items-center lg:items-start md:flex-row text-center gap-4 lg:gap-0">
              <img src={iconTwo} alt="" className="w-[72px] h-[72px]" />
              <div className="flex flex-col lg:ps-5">
                <p className="body-2 mt-3">
                  Usage & implementation of our software
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center lg:items-start md:flex-row text-center gap-4 lg:gap-0">
              <img src={iconThree} alt="" className="w-[72px] h-[72px]" />
              <div className="flex flex-col lg:ps-5">
                <p className="body-2 mt-3">How we help drive innovation</p>
              </div>
            </div>
          </div>
          <div>
            <Form />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Contact;
