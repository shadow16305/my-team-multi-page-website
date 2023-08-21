import React, { Fragment } from "react";

const Header = () => {
  return (
    <Fragment>
      <div className="bg-[url('/src/assets/about-header-mobile.png')] lg:bg-[url('/src/assets/about-header.png')] bg-cover">
        <div className="container mx-auto flex flex-col lg:flex-row justify-center items-center py-56 gap-6 lg:gap-36">
          <h2 className="text-center lg:text-start">About</h2>
          <p className="body-1 text-center lg:text-start max-w-[327px] lg:max-w-[730px]">
            We help companies build dynamic teams made up of top global talent.
            Using our network of passionate professionals we drive innovation
            and deliver incredible outcomes. Talented, diverse teams shape the
            best products and experiences. We’ll bring those teams to you.
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
