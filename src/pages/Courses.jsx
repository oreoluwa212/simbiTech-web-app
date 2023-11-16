// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Header1 from "../components/Header1";
import JobButton from "../components/JobButton";
import JobSearch from "../components/JobSearch";
import JobCard from "../components/JobCard";
import { Facebook, Google, Sahara, Twitter } from "../assets";
import CoursesCard from "../components/CoursesCard";
import Sidebar from "../components/Sidebar";
// import { useNavigate } from "react-router-dom";

const Courses = () => {
  const [activeScreen, setActiveScreen] = useState(1);

  return (
    <div className="h-screen w-full flex justify-start items-start">
      <Sidebar />
      <div className="w-4/5 h-full overflow-auto flex flex-col gap-8 px-[5%] pt-8">
        <Header1 />
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
                Live Courses
              </button>
              <button
                onClick={() => setActiveScreen(2)}
                className={
                  activeScreen === 2
                    ? "text-primary border-primary border-b-4 pb-[24px] font-bold px-[12px]"
                    : "px-[12px]"
                }
              >
                Recorded Courses
              </button>
            </div>
          </div>
        </div>
        {activeScreen === 1 ? (
          <>
            <div className="mt-[1.5rem] flex items-end justify-end">
              <JobSearch />
            </div>

            <div className="flex flex-row gap-8 ">
              <CoursesCard />
              <CoursesCard />
              <CoursesCard />
            </div>
          </>
        ) : activeScreen === 2 ? (
          <>
            <div className="mt-[1.5rem] flex items-end justify-end">
              <JobSearch />
            </div>

            <div className="flex flex-row gap-8 ">
              <CoursesCard />
              <CoursesCard />
              <CoursesCard />
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Courses;
