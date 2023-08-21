import React, { Fragment } from "react";

import iconOne from "../../assets/Oval.png";
import iconTwo from "../../assets/Oval Copy 5.png";
import iconThree from "../../assets/Oval Copy 6.png";

const Testimonials = () => {
  return (
    <Fragment>
      <div className="bg-[url('/src/assets/mobile-testimonials.png')] lg:bg-[url('/src/assets/Testimonials.png')] bg-cover bg-no-repeat">
        <div className="container mx-auto py-48 flex flex-col items-center text-center gap-20">
          <h3 className="lg:max-w-[932px]">
            Delivering real results for top companies. Some of our{" "}
            <span className="text-raptureBlue">success stories.</span>
          </h3>
          <div className="flex flex-col lg:flex-row gap-20">
            <div className="flex flex-col items-center">
              <p className="body-2 max-w-[327px] lg:max-w-[350px]">
                “The team perfectly fit the specialized skill set required. They
                focused on the most essential features helping us launch the
                platform eight months faster than planned.”
              </p>
              <h4 className="text-raptureBlue mt-5">Kady Baker</h4>
              <p className="text-white text-[13px]">
                Product Manager at Bookmark
              </p>
              <div className="flex justify-center mt-5">
                <img src={iconOne} width={62} height={62} alt="" />
              </div>
            </div>
            <div className="flex flex-col items-center">
              <p className="body-2 max-w-[327px] lg:max-w-[350px]">
                “The team perfectly fit the specialized skill set required. They
                focused on the most essential features helping us launch the
                platform eight months faster than planned.”
              </p>
              <h4 className="text-raptureBlue mt-5">Kady Baker</h4>
              <p className="text-white text-[13px]">
                Product Manager at Bookmark
              </p>
              <div className="flex justify-center mt-5">
                <img src={iconTwo} width={62} height={62} alt="" />
              </div>
            </div>
            <div className="flex flex-col items-center">
              <p className="body-2 max-w-[327px] lg:max-w-[350px]">
                “The team perfectly fit the specialized skill set required. They
                focused on the most essential features helping us launch the
                platform eight months faster than planned.”
              </p>
              <h4 className="text-raptureBlue mt-5">Kady Baker</h4>
              <p className="text-white text-[13px]">
                Product Manager at Bookmark
              </p>
              <div className="flex justify-center mt-5">
                <img src={iconThree} width={62} height={62} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Testimonials;
