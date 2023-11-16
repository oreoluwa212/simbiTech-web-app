import React from 'react'
import { Logo } from '../assets';
import { FaFacebook, FaInstagram, FaTwitter, FaWifi, FaYoutube } from "react-icons/fa";


const Footer = () => {
  return (
    <div className="bg-whitebg pt-5">
      <div className=" flex mx-[5%] p-3 text-primary underline text-[16px] font-medium justify-end">
        <button>
          <a href="#top">Return to the top</a>
        </button>
      </div>
      <div className="h-[52px] w-full bg-footerUp flex items-center ">
        <ul className="list-none flex gap-12 text-blackbase m-[4%] justify-start font-bold text-[1.1rem]">
          <li>
            <a href="#">Documentation</a>
          </li>
          <li>
            <a href="#">Sponsorship</a>
          </li>
          <li>
            <a href="#">Getting Started</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
        </ul>
      </div>
      <div className="h-[156px] bg-buttonbg flex gap-7 justify-between">
        <div className="w-3/5 flex items-center justify-center">
          <div className="flex items-center gap-5">
            <div className="bg-lilac w-[80px] h-[80px] rounded-[50%]">
              <img src={Logo} alt="" />
            </div>
            <h1 className="text-[32px] font-bold">SimbiTech</h1>
          </div>
        </div>
        <div className="w-full flex flex-col items-center justify-center gap-6">
          <div className="">
            <h3 className="font-medium">
              Want to be the first to hear about our courses, webinars, tech
              updates and events?
            </h3>
          </div>
          <div className="">
            <form action="">
              <div className="flex h-[55px]">
                <input
                  className="w-[290px] border-purple border-2 bg-transparent p-6 outline-none rounded-l-3xl text-black050"
                  type="text"
                  placeholder="Enter your email address"
                />
                <input
                  className="rounded-r-3xl bg-purple w-[100px] text-whitebg"
                  type="submit"
                  value="Hop In"
                />
              </div>
            </form>
          </div>
        </div>
        <div className="w-4/5 flex flex-col justify-center items-center gap-3">
          <div className="flex gap-2">
            <div className="flex gap-6 text-[34px]">
              <div className="rounded-[8px] h-[50px] w-[50px] bg-[#0000001A] p-2">
                <FaFacebook />
              </div>
              <div className="rounded-[8px] h-[50px] w-[50px] bg-[#0000001A] p-2">
                <FaTwitter />
              </div>
              <div className="rounded-[8px] h-[50px] w-[50px] bg-[#0000001A] p-2">
                <FaYoutube />
              </div>
              <div className="rounded-[8px] h-[50px] w-[50px] bg-[#0000001A] p-2">
                <FaInstagram />
              </div>
              <div className="rounded-[8px] h-[50px] w-[50px] bg-[#0000001A] p-2">
                <FaWifi />
              </div>
            </div>
          </div>
          <div className="text-[24px] font-bold flex flex-col items-center">
            <h3>SimbiTech Contact Center</h3>
            <div className="flex gap-4 text-[18px] font-medium">
              <h4>(+234) CALL-SITECH</h4>
              <h5>info@simbiTech.org</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[218px] w-full bg-purple">
        <div className="w-4/5 h-full mx-[5%] pt-8">
          <div className="flex items-center gap-5">
            <div className="bg-lilac w-[60px] h-[60px] rounded-[50%]">
              <img src={Logo} alt="" />
            </div>
            <div className="flex flex-col gap-2 text-whitebg">
              <h3 className="text-[##D0D0D0]">www.simbitech.org</h3>
              <h2 className="font-semibold">
                An official website of the Simbitech
              </h2>
            </div>
          </div>
          <div className="w-4/5h-full pt-8">
            <ul className="grid grid-cols-4 gap-2 text-[#D0D0D0]">
              <li>
                <button>About Us</button>
              </li>
              <li>
                <button>FAQs</button>
              </li>
              <li>
                <button>Data Processing Agreement</button>
              </li>
              <li>
                <button>Privacy Policy</button>
              </li>
              <li>
                <button>Accessibility support</button>
              </li>
              <li>
                <button>Term of Use</button>
              </li>
              <li>
                <button>Performance reports</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer