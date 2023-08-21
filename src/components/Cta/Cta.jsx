import React, { Fragment } from "react";

const Cta = () => {
  return (
    <Fragment>
      <div className="bg-[url('/src/assets/mobile-cta.png')] lg:bg-[url('/src/assets/cta.png')] bg-cover bg-no-repeat">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center py-28 lg:py-20 lg:gap-56">
          <h3 className="text-darkGreen text-center lg:text-start">
            Ready to get started?
          </h3>
          <button className="rounded-3xl bg-none text-darkGreen border-2 px-6 py-2 font-semibold leading-7 text-lg my-10 hover:bg-darkGreen hover:text-white hover:border-darkGreen transition-[0.25s]">
            contact us
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Cta;
