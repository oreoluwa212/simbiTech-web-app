import React from 'react'
import { aboutLogo, websiteImg } from "../assets";


const OurWhy = () => {
  return (
    <div className="p-1 xxxl:px-8 xxxl:pb-10 xxxl:pt-6">
      <div className="flex gap-3">
        <img src={aboutLogo} alt="" className="px-4" />
        <h1 className="text-[36px] font-bold ">OUR WHY</h1>
      </div>
      <div className="w-[450px] leading-[1.5rem] pt-5 px-2 ">
        <p className="text-[16px] xxl:text-[17px] xxxl:text-[20px]">
          Currently, black women holds less than 3% tech leadership roles. At
          Simbitech, we are committed to bridging the gender gap that exist in
          the tech ecosystem. To achieve this, we have established a growing
          tech-skill learning facility that empowers and supports women in the
          tech field. We've also created a secure and inclusive community for
          all our members, where each and every voice is not only respected but
          genuinely heard, paving the path toward a more equitable and promising
          future for women.
        </p>
      </div>
    </div>
  );
}

export default OurWhy