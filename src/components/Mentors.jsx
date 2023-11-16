import React, { useState } from "react";
import MentorsCard from "../utilities/ProductsHub/MentorsCard";
import Header1 from "./Header1";
import Sidebar from "./Sidebar";

const Mentors = () => {
  const [activeScreen, setActiveScreen] = useState(1);

  return (
    <div className="h-screen w-full flex justify-start items-start">
      <Sidebar />
      <div className="w-4/5 h-full overflow-auto flex flex-col gap-8 px-[5%] pt-8">
        <Header1 />
        <div className="w-full">
          <div className="">
            <div className=" bg-lilac border h-[60px] rounded-t-[8px] mt-[2rem]">
              <h2 className="text-[29px] font-bold text-primary px-8">
                My Courses
              </h2>
            </div>
            <div className="w-full bg-lilac h-[80px] rounded-b-[8px]">
              <div className="flex flex-row px-8 gap-16 text-[22px] justify-start items-center text-primary font-medium h-[92px]  ">
                <button
                  onClick={() => setActiveScreen(1)}
                  className={
                    activeScreen === 1
                      ? "text-primary border-primary border-b-4 pb-[4px] font-bold px-[12px]"
                      : "px-[12px]"
                  }
                >
                  Mentors
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-between my-6 pt-6">
            <h1 className=" font-bold text-[#2B002B] text-3xl">
              Featured Mentors
            </h1>
            <p className="underline text-[18px] font-semibold text-primary">
              See all
            </p>
          </div>
          <div className="mb-9">
            <MentorsCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mentors;
