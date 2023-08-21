import React, { Fragment } from "react";

const Header = () => {
  return (
    <Fragment>
      <div className="bg-[url('/src/assets/mobileHeader.png')] lg:bg-[url('/src/assets/header-bg.png')] bg-no-repeat bg-cover">
        <div className="container mx-auto flex flex-col lg:flex-row justify-center items-center py-[315px] gap-6 lg:gap-24">
          <h1 className="text-center lg:text-start max-w-[240px] lg:max-w-[600px]">
            Find the best <span className="text-coral">talent</span>
          </h1>
          <p className="body-1 max-w-[330px] lg:max-w-[445px] text-center lg:text-start">
            Finding the right people and building high performing teams can be
            hard. Most companies aren’t tapping into the abundance of global
            talent. We’re about to change that.
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
