import React, { Fragment } from "react";

import iconOne from "../../assets/Group 11.svg";
import iconTwo from "../../assets/Group 12.svg";
import iconthree from "../../assets/Group 13.svg";

const Features = () => {
  return (
    <Fragment>
      <div className="bg-[url('/src/assets/features-mobile.png')] lg:bg-[url('/src/assets/Features.png')] bg-cover bg-no-repeat">
        <div className="container mx-auto flex flex-col lg:flex-row lg:justify-center lg:items-center gap-20 lg:gap-56 py-20 lg:py-44">
          <h3 className="max-w-[240px] lg:max-w-[445px] text-[32px] lg:text-[48px] ps-5 lg:ps-0">
            Build & manage distributed teams like no one else.
          </h3>
          <div className="flex flex-col gap-20 lg:gap-10">
            <div className="flex flex-col items-center lg:items-start lg:flex-row text-center gap-4 lg:gap-0">
              <img src={iconOne} alt="" className="w-[72px] h-[72px]" />
              <div className="flex flex-col lg:ps-5">
                <h4 className="text-coral">Experienced Individuals</h4>
                <p className="body-2 mt-3">
                  Our network is made up of highly experienced professionals who
                  are passionate about what they do.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center lg:items-start lg:flex-row text-center gap-4 lg:gap-0">
              <img src={iconTwo} alt="" className="w-[72px] h-[72px]" />
              <div className="flex flex-col lg:ps-5">
                <h4 className="text-coral">Easy to Implement</h4>
                <p className="body-2 mt-3">
                  Our processes have been refined over years of implementation
                  meaning our teams always deliver.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center lg:items-start lg:flex-row text-center gap-4 lg:gap-0">
              <img src={iconthree} alt="" className="w-[72px] h-[72px]" />
              <div className="flex flex-col lg:ps-5">
                <h4 className="text-coral">Enhanced Productivity</h4>
                <p className="body-2 mt-3">
                  Our customized platform with in-built analytics helps you
                  manage your distributed teams.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Features;
