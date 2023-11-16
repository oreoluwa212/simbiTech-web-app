// import React from 'react'
import { Logo } from "../assets";
import Navlinks from "./Navlinks";

const Sidebar = () => {
  return (
    <div className="bg-purple w-1/5 h-screen text-white  px-8 pt-10">
      <div className="">
      <header className="flex items-center gap-2">
        <img src={Logo} alt="Placeholder" />
        <h1 className="text-white-100
        font-source text-[1.2rem] xxl:text-3xl font-bold leading-9">Simibitech</h1>
      </header>

      <div className="mt-7 xxl:mt-14">
        <Navlinks />
      </div>

      </div>
    </div>
  );
}

export default Sidebar