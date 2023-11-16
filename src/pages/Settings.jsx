import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Courses from "../utilities/ProductsHub/Course";
import Header1 from "../components/Header1";
import ProfileSettings from "../components/ProfileSettings";
import Token from "../components/Token";

const Settings = () => {
  const [activeScreen, setActiveScreen] = useState(1);

  return (
    <div className="h-screen w-full flex justify-start items-start bg-whitebg">
      <Sidebar />
      <div className="w-4/5 h-full overflow-auto flex flex-col gap-8 px-[5%] pt-8">
        <Header1 />
        <div className="w-full">
          <div className="w-full bg-lilac border h-[60px] rounded-t-[8px]">
            <h2 className="text-[30px] font-bold text-primary px-8">
              Settings
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
                Profile
              </button>
              <button
                onClick={() => setActiveScreen(2)}
                className={
                  activeScreen === 2
                    ? "text-primary border-primary border-b-4 pb-[24px] font-bold px-[12px]"
                    : "px-[12px]"
                }
              >
                Token management
              </button>
              <button
                onClick={() => setActiveScreen(3)}
                className={
                  activeScreen === 3
                    ? "text-primary border-primary border-b-4 pb-[24px] font-bold px-[12px]"
                    : "px-[12px]"
                }
              >
                About Us
              </button>
            </div>
          </div>
        </div>

        {activeScreen === 1 ? (
          <ProfileSettings />
        ) : activeScreen === 2 ? (
          <ProfileSettings />
        ) : activeScreen === 3 ? (
          <ProfileSettings />
        ) : null}
      </div>
    </div>
  );
};

export default Settings;
