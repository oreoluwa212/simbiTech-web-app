import React from "react";
import { Logo } from "../assets";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

 
  return (
    <div className=" bg-cover bg-no-repeat bg-center h-screen w-full bg-hero-bg bg-purple text-white">
      <div className="container mx-auto flex flex-col gap-[70px] h-[100vh]">
        <div className="flex gap-[50px] flex-col">
          <div className=" flex items-center justify-between px-[10%] mt-[3rem]">
            <div className="flex items-center gap-5">
              <div className="bg-lilac w-[80px] h-[80px] rounded-[50%]">
                <img src={Logo} alt="" />
              </div>
              <h1 id="top" className="text-[32px] font-bold">
                SimbiTech
              </h1>
            </div>

            <ul className="flex justify-between w-4/6 text-[20px] font-semibold">
              <li>
                <button className="w-[100px] hover:bg-black-100 hover:rounded-[4px] h-[40px]">
                  Home
                </button>
              </li>
              <li>
                <button className="w-[110px] hover:bg-black-100 hover:rounded-[4px] h-[40px]">
                  About Us
                </button>
              </li>
              <li>
                <button className="w-[130px] hover:bg-black-100 hover:rounded-[4px] h-[40px]">
                  Road Map
                </button>
              </li>
              <li>
                <button className="w-[130px] hover:bg-black-100 hover:rounded-[4px] h-[40px]">
                  Sponsorship
                </button>
              </li>
              <li>
                <button
                  className="w-[149px]  border-buttonbg border-2 rounded-[4px] px-[8px]"
                  onClick={() => navigate("/login")}
                >
                  Get Started
                </button>
              </li>
            </ul>
          </div>
          <div className="flex flex-col justify-center items-center gap-[40px] ">
            <h1 className="text-[58px]">
              Learn, Build and <span>Lead</span> in Tech
            </h1>
            <h2 className="text-[32px]">
              Unlocking Girl-Powered Potential to Elevate Her{" "}
              <span>Future in Tech</span>
            </h2>
            <h4 className="text-[36px]">To join the Tech revolution</h4>
          </div>
          <div className="flex justify-center">
            <button
              onClick={() => navigate("/signup")}
              className="w-[360px] h-[84px] bg-buttonbg text-[#151415] font-semibold text-[30px] rounded-[4px]"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
