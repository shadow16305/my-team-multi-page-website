import React, { Fragment, useState } from "react";
import icon_one from "../../assets/NIkita.svg";
import icon_two from "../../assets/cristian.svg";
import icon_three from "../../assets/cruz.svg";
import icon_four from "../../assets/drake.svg";
import icon_five from "../../assets/griffin.svg";
import icon_six from "../../assets/aden-allen.svg";
import plus_icon from "../../assets/Combined Shape.svg";
import linkedIn from "../../assets/004-linkedin-logo.svg";
import twitter from "../../assets/twitter.svg";

const Directors = () => {
  const [openStates, setOpenStates] = useState({});
  const cardClickHandler = (id, event) => {
    console.log(event.target);
    setOpenStates((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const cards = [
    {
      id: 0,
      img: icon_one,
      name: "Nikita Marks",
      title: "Founder & CEO",
      quote:
        "“It always amazes me how much talent there is in every corner of the globe.”",
    },
    {
      id: 1,
      img: icon_two,
      name: "Cristian Duncan",
      title: "Co-founder & COO",
      quote:
        "“Distributed teams required unique processes. You need to approach work in a new way.”",
    },
    {
      id: 2,
      img: icon_three,
      name: "Cruz Hamer",
      title: "Co-founder & CTO",
      quote:
        "“Technology is at the forefront of enabling distributed teams. That's where we come in.”",
    },
    {
      id: 3,
      img: icon_four,
      name: "Drake Heaton",
      title: "Business Development Lead",
      quote:
        "“Hiring similar people from similar backgrounds is a surefire way to stunt innovation.”",
    },
    {
      id: 4,
      img: icon_five,
      name: "Griffin Wise",
      title: "Lead Marketing",
      quote:
        "“Unique perspectives shape unique products, which is what you need to survive these days.”",
    },
    {
      id: 5,
      img: icon_six,
      name: "Aden Allan",
      title: "Head of Talent",
      quote:
        "“Empowered teams create truly amazing products. Set the north star and let them follow it.”",
    },
  ];

  return (
    <Fragment>
      <div className="bg-[url('/src/assets/directors-bg-mobile.png')] lg:bg-[url('/src/assets/directors-bg.png')] bg-cover bg-no-repeat">
        <div className="container mx-auto flex flex-col items-center gap-12 py-32">
          <h3 className="text-center">Meet the directors</h3>
          <div className="flex flex-col lg:flex-wrap lg:flex-row gap-7 gap-y-16 lg:max-w-[1110px] justify-center">
            {cards.map((elem) => (
              <div
                className={`flex flex-col items-center justify-center bg-stateGreen w-[327px] h-[281px] lg:w-[350px] lg:h-[253px] relative`}
                key={elem.id}
              >
                <div
                  className={`h-${
                    openStates[elem.id] ? "0" : "full"
                  } overflow-hidden flex flex-col items-center justify-center gap-1`}
                >
                  <img src={elem.img} width={96} height={96} alt="" />
                  <h4>{elem.name}</h4>
                  <p className="body-2">{elem.title}</p>
                </div>
                <div
                  className={`h-${
                    openStates[elem.id] ? "full" : "0"
                  } flex flex-col items-center justify-center bg-stateGreen relative gap-7 overflow-hidden`}
                >
                  <h4>{elem.name}</h4>
                  <p className="body-2 text-center max-w-[254px]">
                    {elem.quote}
                  </p>
                  <div className="flex gap-4">
                    <img src={twitter} alt="" />
                    <img src={linkedIn} alt="" />
                  </div>
                </div>
                <button
                  className={`${
                    openStates[elem.id] ? "bg-raptureBlue hover:bg-coral" : ""
                  } bg-coral p-4 rounded-full absolute translate-y-1/2 bottom-0 hover:bg-raptureBlue transition-[0.25s]`}
                  onClick={(event) => cardClickHandler(elem.id, event)}
                >
                  <img
                    src={plus_icon}
                    className={`${
                      openStates[elem.id] ? "rotate-45" : "rotate-0"
                    }`}
                    alt=""
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Directors;
