import React from "react";
import { visionLogo, websiteImg } from "../assets";

const VisionMission = () => {
  return (
    <div className="p-2 xxxl:px-8 xxxl:pb-12 xxxl:pt-8">
      <div className="flex gap-3">
        <img src={visionLogo} alt="" />
        <h1 className="text-[34px] font-bold">VISION & MISSION</h1>
      </div>
      <div className="w-[450px] leading-[1.5rem] pt-5 px-2 ">
        <p className="text-[16px] xxl:text-[17px] xxxl:text-[22px] ">
          Our vision at Simbitech is to lead the charge in bridging the gender
          gap in tech participation by creating a friendly learning environment
          where women thrive and excel in technology.
          <br />
          Our mission is to empower women to access tech education, secure tech
          jobs, and ensure their retention in the tech industry by providing a
          supportive and inclusive community.
        </p>
      </div>
    </div>
  );
};

export default VisionMission;
