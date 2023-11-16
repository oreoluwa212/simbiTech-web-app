import React from "react";
import { access, courses, material, opportunity, softskill } from "../assets";

const Courses = () => {
  return (
    <div className="rounded-[8px] border-purple border-2 h-[250px] flex gap-6 ">
      <div className="w-1/4 bg-lilac rounded-l-[8px] h-full flex items-center p-4">
        <img src={courses} alt="" />
      </div>
      <div className=" pt-2 pb-4 pr-5 w-3/4 bg-transparent flex flex-col">
        <h1 className="text-[26px] font-bold text-center">Courses</h1>
        <p className="text-[16px] font-medium text-left">
          We provide tech and soft courses tailored to meet the needs of both
          beginners looking to launch their careers and professionals looking to
          enhance their skills. These courses feature live classes taught by
          knowledgeable instructors who stay ahead on the latest trends across
          all tracks.
        </p>
      </div>
    </div>
  );
};
const Opportunity = () => {
  return (
    <div className="rounded-[8px] border-purple border-2 h-[250px] flex gap-6 flex-row-reverse ">
      <div className="w-1/4 bg-purple h-full flex items-center p-4">
        <img src={opportunity} alt="" />
      </div>
      <div className=" pt-2 pb-4 pl-5 w-3/4 bg-transparent flex flex-col">
        <h1 className="text-[26px] font-bold text-center">Opportunity Hub</h1>
        <p className="text-[16px] font-medium text-left">
          Explore our opportunity hub, your go-to source for the latest job
          listings, internships, scholarships opportunities and so much more.
          Stay connected to the opportunities you need to advance your career in
          tech!
        </p>
      </div>
    </div>
  );
};
const Material = () => {
  return (
    <div className="rounded-[8px] border-purple border-2 h-[250px] mt-6 flex gap-6 ">
      <div className="w-1/4 bg-buttonbg rounded-l-[8px] h-full flex items-center p-4">
        <img src={material} alt="" />
      </div>
      <div className=" pt-2 pb-4 pr-5 w-3/4 bg-transparent flex flex-col">
        <h1 className="text-[26px] font-bold text-center">Material Library</h1>
        <p className="text-[16px] font-medium text-left">
          Explore our Material Library, your treasure trove of valuable tech
          resources. Access a wealth of materials, including frequently asked
          questions for tech role interviews, interview hacks, and more. Prepare
          effectively and gain the knowledge you need to excel in your tech
          career. Your key to landing that job is just a click away.
        </p>
      </div>
    </div>
  );
};
const SoftSkill = () => {
  return (
    <div className="rounded-[8px] border-purple border-2 h-[250px] mt-6 flex gap-6 flex-row-reverse ">
      <div className="w-1/4 bg-secondary h-full flex items-center p-4">
        <img src={softskill} alt="" />
      </div>
      <div className=" pt-2 pb-4 pl-5 w-3/4 bg-transparent flex flex-col">
        <h1 className="text-[26px] font-bold text-center">Learn Soft Skills</h1>
        <p className="text-[16px] font-medium text-left">
          At Simbi tech, we believe it is not just about technology; beyond
          technology, we focus on helping you cultivate vital soft skills needed
          in the workplace. Embark on a holistic learning journey that empowers
          you for success in both your tech career and life today!
        </p>
      </div>
    </div>
  );
};

const OurServicesSection = () => {
  return (
    <div className="h-[850px] bg-whitebg border-b-2">
      <div className="mx-auto py-[60px] h-[550px] flex flex-col w-[85%]">
        <div className="flex justify-center">
          <h1 className="text-[36px] font-bold">OUR SERVICES</h1>
        </div>
        <div className="grid grid-cols-2 gap-20 pt-14">
          <div className="">
            <Courses />
            <Material />
          </div>
          <div className="">
            <Opportunity />

            <SoftSkill />
          </div>
        </div>
        <div className="relative -top-[85%] left-[42%] h-[200px]">
          <img className="h-full" src={access} alt="" />
        </div>
      </div>
    </div>
  );
};

export default OurServicesSection;
