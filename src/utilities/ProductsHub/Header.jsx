import React from "react";
import Profile from "../../assets/images/profile.svg";
import Coin from "../../assets/images/coin.svg";
import { BsBell } from "react-icons/bs";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate()
  return (
    <div className="flex justify-between pt-6">
      <div className="flex  gap-6">
        <div className="gap-2 flex flex-col">
          <img
            className="shadow-2xl rounded-[50%] border border-whitebg"
            src={Profile}
            alt="User Image"
          />
          <button className="font-bold text-[#2B002B] text-medium ">
            Edit Profile
          </button>
        </div>
        <div className="flex flex-col ">
          <h3 className="text-4xl text-primary  font-bold">Hi Ope,</h3>
          <p className="text-[24px] text-primary py-3">
            Let&apos;s learn something new today!
          </p>
        </div>
      </div>
      <div className="flex">
        <div className="flex gap-12">
          <div className="flex gap-4 text-xl">
            <div className="flex pt-4">
              <BsBell className="" />
            </div>
            <div className="font-bold text-[20px] flex flex-col text-purple">
              <div className="flex gap-4">
                <p>100 </p>
                <img src={Coin} alt="coin Image" />
              </div>
              <p className="">SB TOKEN</p>
            </div>
          </div>
          <div className="text-primary">
            <FaArrowRightFromBracket
              className="text-3xl cursor-pointer"
              onClick={() => navigate("/")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
