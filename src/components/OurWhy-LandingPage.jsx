import React, { useState } from "react";
import { aboutLogo, vision, websiteImg, whatwedo } from "../assets";
import VisionMission from "./VisionMission";
import WhatWeDo from "./WhatWeDo";
import OurWhy from "./OurWhy";

const OurWhySection = () => {
  const [activeScreen, setActiveScreen] = useState(1);
  return (
    <div className="h-[800px] bg-whitebg flex items-center border-b-2 ">
      <div className="bg-white mx-auto  flex flex-col w-[80%]  shadow-custom rounded-[4px] pl-5">
        <div className="grid grid-cols-2 gap-12 relative">
          <div className="text-blackbase">
            {activeScreen === 1 ? (
              <OurWhy />
            ) : activeScreen === 2 ? (
              <WhatWeDo />
            ) : activeScreen === 3 ? (
              <VisionMission />
            ) : null}

            <div className="grid grid-cols-3 gap-8 mx-auto pl-8 absolute w-[98%]">
             
                <button
                  onClick={() => setActiveScreen(1)}
                  className={
                    activeScreen === 1
                      ? "bg-purple h-[90px] text-whitebg flex justify-center items-center text-[32px] font-bold rounded-[4px]"
                      : "bg-buttonbg h-[90px] text-blackbase flex justify-center items-center text-[32px] font-bold rounded-[4px]"
                  }
                >
                  Our Why
                </button>
                <button
                  onClick={() => setActiveScreen(2)}
                  className={
                    activeScreen === 2
                      ? "bg-purple h-[90px] text-whitebg flex justify-center items-center text-[32px] font-bold rounded-[4px]"
                      : "bg-lilac h-[90px] text-blackbase flex justify-center items-center text-[32px] font-bold rounded-[4px]"
                  }
                >
                  What we do
                </button>
                <button
                  onClick={() => setActiveScreen(3)}
                  className={
                    activeScreen === 3
                      ? "bg-purple h-[90px] text-whitebg flex justify-center items-center text-[32px] font-bold rounded-[4px]"
                      : "bg-lilac h-[90px] text-blackbase flex justify-center items-center text-[32px] font-bold rounded-[4px]"
                  }
                >
                  Vision & Mission
                </button>
             
              
            </div>
          </div>
          <div className="w-full h-full">
            {activeScreen === 1 ? (
              <div className="">
                <img
                  src={websiteImg}
                  className="h-full w-full bg-cover"
                  alt=""
                />
              </div>
            ) : activeScreen === 2 ? (
              <img src={whatwedo} className="h-full w-full bg-cover" alt="" />
            ) : activeScreen === 3 ? (
              <img src={vision} className="h-full bg-cover" alt="" />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurWhySection;
