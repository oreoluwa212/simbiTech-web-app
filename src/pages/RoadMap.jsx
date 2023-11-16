import { useState } from "react";
import Courses from "../utilities/ProductsHub/Course";
import Header1 from "../components/Header1";
import Profile from "../components/Profile";
import ProgressCard from "../components/ProgressCard";
import SoftCourses from "../components/SoftCourses";
import RecommendBooks from "../components/RecommendBooks";
import ReadBooks from "../components/BooksRead";
import Summary from "../components/Summary";
import Sidebar from "../components/Sidebar";



const RoadMap = () => {
  const [activeScreen, setActiveScreen] = useState(1);
  return (
    <div className="h-screen w-full flex justify-start items-start">
      <Sidebar />
      <div className="w-4/5 h-full overflow-auto flex flex-col gap-8 px-[5%]  pt-8">
        <Header1 />
        <div className="">
          <div className="w-full bg-lilac border h-[60px] rounded-t-[8px]">
            <h2 className="text-[30px] font-bold text-primary px-8">
              Track Roadmap
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
                My courses
              </button>
            </div>
          </div>
        </div>
        <Profile />
        <ProgressCard />
        {activeScreen === 1 ? <Courses /> : null}
        <SoftCourses />
        <RecommendBooks />
        <ReadBooks />
        <Summary />
      </div>
    </div>
  );
};

export default RoadMap;