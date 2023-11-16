import React, { useState } from "react";
import Header1 from "../components/Header1";
import { VscSearch } from "react-icons/vsc";
import PageNumbering from "../components/PageNumbering";
import ProductCourses from "./ProductsHub/ProductCourses";

const Courses = () => {
  const [activeScreen, setActiveScreen] = useState(1);
  return (
    <div className="w-full bg-whitebg">
      <div className=" flex flex-col gap-8 px-10 pt-8">
        <Header1 />
        <div className="">
          <div className="w-full bg-lilac border h-[60px] rounded-t-[8px]">
            <h2 className="text-[30px] font-bold text-primary px-8">
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
                Recorded courses
              </button>
            </div>
          </div>
        </div>
        <div className="flex px-2 justify-end  w-full h-[40px]">
         
          <div className="bg-white100 w-[25%] h-[48px] rounded-[24px] flex items-center px-6 font-semibold text-[20px] justify-end">
            <VscSearch />
            <input
              type="text"
              placeholder="Enter a keyword"
              className=" w-full bg-transparent outline-none placeholder:text-[18px] placeholder:px-3"
            />
          </div>
        </div>

        {activeScreen === 1 ? (
          <>
            <ProductCourses/>
           <ProductCourses/>
            <PageNumbering />
          </>
        ) : activeScreen === 2 ? (
          <>
            <ProductCourses/>
            <PageNumbering />
          </>
        )  : null}
      </div>
    </div>
  );
};

export default Courses;
