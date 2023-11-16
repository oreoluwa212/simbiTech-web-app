import React, { useState } from "react";
import { BsBell } from "react-icons/bs";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { coin, mattPic } from "../assets";

function Header1() {
  const navigate = useNavigate()
  return (
    <div className="flex justify-end pt-6 w-full items-center">
      <div className="flex ">
        <div className="flex gap-12">
          <div className="flex gap-4 text-xl">
            <div className="flex pt-4">
              <BsBell className="" />
            </div>
            <div className="font-bold text-[20px] flex flex-col text-purple">
              <div className="flex gap-4">
                <p>100 </p>
                <img src={coin} alt="coin Image" />
              </div>
              <p className="">SB TOKEN</p>
            </div>
          </div>
          <div className="text-primary">
            <FaArrowRightFromBracket className="text-3xl cursor-pointer" onClick={() => navigate("/")}/>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header1;
