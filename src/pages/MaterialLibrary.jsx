import React, { useState } from "react";
import Courses from "../utilities/ProductsHub/Course";
import Header1 from "../components/Header1";
import { VscSearch, VscTriangleDown } from "react-icons/vsc";
import { BsFilter } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import Portfolio from "../components/Portfolio";
import PageNumbering from "../components/PageNumbering";
import CaseStudies from "../components/CaseStudies";
import Sidebar from "../components/Sidebar";

const MaterialLibrary = () => {
  const [activeScreen, setActiveScreen] = useState(1);
  return (
    <div className="h-screen w-full flex justify-start items-start">
      <Sidebar />
      <div className="w-4/5 h-full overflow-auto flex flex-col gap-8 px-[5%] pt-8">
        <Header1 />
        <div className="">
          <div className="w-full bg-lilac border h-[60px] rounded-t-[8px]">
            <h2 className="text-[30px] font-bold text-primary px-8">
              Material Library
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
                Portfolios
              </button>
              <button
                onClick={() => setActiveScreen(2)}
                className={
                  activeScreen === 2
                    ? "text-primary border-primary border-b-4 pb-[24px] font-bold px-[12px]"
                    : "px-[12px]"
                }
              >
                Case studies
              </button>
              <button
                onClick={() => setActiveScreen(3)}
                className={
                  activeScreen === 3
                    ? "text-primary border-primary border-b-4 pb-[24px] font-bold px-[12px]"
                    : "px-[12px]"
                }
              >
                Books
              </button>
              <button
                onClick={() => setActiveScreen(4)}
                className={
                  activeScreen === 4
                    ? "text-primary border-primary border-b-4 pb-[24px] font-bold px-[12px]"
                    : "px-[12px]"
                }
              >
                Interview FAQs
              </button>
            </div>
          </div>
        </div>
        <div className="flex px-2 justify-between  w-full h-[40px]">
          <div className="bg-blackbase w-1/5 rounded-[8px] mt-2 h-[40px] flex items-center px-4">
            <div className="text-whitebg text-[20px] font-extrabold flex gap-4">
              <BsFilter />
              <p className="text-[16px] font-normal">UI/UX DESIGN</p>
              <VscTriangleDown />
            </div>
          </div>
          <div className="bg-white100 w-[25%] h-[48px] rounded-[24px] flex items-center px-6 font-semibold text-[20px] justify-between">
            <VscSearch />
            <input
              type="text"
              placeholder="Enter a keyword"
              className=" w-full bg-transparent outline-none placeholder:text-[18px] placeholder:px-3"
            />
          </div>
        </div>
        <div className="flex px-2 justify-end  w-[95%] h-[40px]">
          <div className="bg-purple w-[155px] rounded-[2px] mt-2 h-[42px] flex items-center py-4 px-3 text-white justify-between">
            <FaPlus />
            <p>Add a Material</p>
          </div>
        </div>

        {activeScreen === 1 ? (
          <>
            <Portfolio />
            <Portfolio />
            <PageNumbering />
          </>
        ) : activeScreen === 2 ? (
          <>
            <CaseStudies />
            <PageNumbering />
          </>
        ) : activeScreen === 3 ? (
          <>
            <Portfolio />
            <Portfolio />
            <PageNumbering />
          </>
        ) : activeScreen === 4 ? (
          <>
            <CaseStudies />
            <PageNumbering />
          </>
        ) : null}
      </div>
    </div>
  );
};

export default MaterialLibrary;
