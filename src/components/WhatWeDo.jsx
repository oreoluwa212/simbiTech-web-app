import React from 'react'
import { whatwedoLogo } from '../assets';

const WhatWeDo = () => {
  return (
    <div className="p-2 xxxl:px-8 xxxl:pb-10 xxxl:pt-6">
      <div className="flex gap-3">
        <img src={whatwedoLogo} alt="" className="px-4" />
        <h1 className="text-[36px] font-bold">WHAT WE DO</h1>
      </div>
      <div className="w-[450px] leading-[1.5rem] pt-5 px-2  ">
        <p className="text-[16px] xxl:text-[17px] xxxl:text-[20px]">
          At Simbitech, we provide a comprehensive range of services aimed at
          bridging the gender gap in tech participation. Our offerings include a
          robust tech-skill learning ecosystem, empowering women to gain track
          in the tech ecosystem. Additionally, we foster an inclusive community
          where every woman&apos;s voice is heard, contributing to a more
          promising and equitable future for women in tech.
        </p>
      </div>
    </div>
  );
}

export default WhatWeDo