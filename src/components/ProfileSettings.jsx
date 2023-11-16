import React, { useState } from 'react'
import { profilePic, refer } from '../assets';
import { AiFillEdit } from "react-icons/ai";
import { RiDeleteBin6Fill, RiUpload2Line } from "react-icons/ri";
import { FaEye, FaEyeSlash, FaRegCircleQuestion } from 'react-icons/fa6';
import { IoMdCopy } from "react-icons/io";



const ProfileSettings = () => {
        const [name, setName] = useState("");
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [confirmPassword, setConfirmPassword] = useState("");
        const [showPassword, setShowPassword] = useState(false);

        const togglePasswordVisibility = () => {
          setShowPassword(!showPassword);
        };
  return (
    <div className="">
      <div className="bg-settings-bg bg-cover rounded-[4px] bg-no-repeat bg-center bg-purple bg-opacity-5 h-screen border-b-2 w-full text-white flex gap-4 p-16 mt-5">
        <div className="w-1/3 flex items-center justify-center">
          <div className="flex flex-col gap-5">
            <img src={profilePic} alt="" />
            <div className="flex gap-8 text-icons justify-center text-[30px]">
              <AiFillEdit />
              <RiDeleteBin6Fill />
            </div>
          </div>
        </div>
        <div className="w-2/3 bg-[#EDEBEE99] flex flex-col justify-center items-center pt-6">
          <div className="border-b-2 border-blackbase w-[90%] mb-4 flex justify-center items-center pb-3 text-blackbase font-semibold">
            <h2 className="text-[26px] font-bold">Personal information</h2>
          </div>
          <form
            onSubmit={() => {}}
            className=" pt-4 px-6 w-4/5 text-blackbase h-[500px]"
          >
            <label
              htmlFor="name"
              className="mb-2 block font-medium text-[16px]"
            >
              Full Name
            </label>
            <input
              placeholder="Ope Akinwale Grace"
              type="text"
              className="border border-gray-300 rounded px-2 py-2 mb-4 block w-full"
              value={name}
              onChange={(ev) => setName(ev.target.value)}
            />
            <label
              htmlFor="email"
              className="mb-2 block font-medium text-[16px]"
            >
              Email
            </label>
            <input
              placeholder="Enter your email address"
              type="text"
              className="border border-gray-300 rounded px-2 py-2 mb-4 block w-full"
              value={email}
              onChange={(ev) => setEmail(ev.target.value)}
            />
            <label
              htmlFor="password"
              className="mb-2 block font-medium text-[16px]] relative"
            >
              Password
              <div className="flex items-center absolute top-0 right-0 h-full mt-10 mr-3">
                {showPassword ? (
                  <FaEyeSlash
                    onClick={togglePasswordVisibility}
                    style={{ color: "gray" }}
                  />
                ) : (
                  <FaEye
                    onClick={togglePasswordVisibility}
                    style={{ color: "gray" }}
                  />
                )}
              </div>
            </label>
            <input
              placeholder="Create your password"
              type={showPassword ? "text" : "password"}
              className="border border-gray-300 rounded px-2 py-2 mb-4 block w-full pr-10"
              value={password}
              onChange={(ev) => setPassword(ev.target.value)}
            />

            <label
              htmlFor="confirmPassword"
              className="mb-2 block font-medium text-[16px]] relative"
            >
              Re-enter Password
              <div className="flex items-center absolute top-0 right-0 h-full mt-10 mr-3">
                {showPassword ? (
                  <FaEyeSlash
                    onClick={togglePasswordVisibility}
                    style={{ color: "gray" }}
                  />
                ) : (
                  <FaEye
                    onClick={togglePasswordVisibility}
                    style={{ color: "gray" }}
                  />
                )}
              </div>
            </label>
            <input
              placeholder="Re-enter your password"
              type={showPassword ? "text" : "password"}
              className="border border-gray-300 rounded px-2 py-2 mb-4 block w-full"
              value={confirmPassword}
              onChange={(ev) => setConfirmPassword(ev.target.value)}
            />

            <button
              type="submit"
              className="bg-[#AA55AA] text-blackbase text-[16px] font-bold px-4 py-[12px] mt-[24px] rounded w-full"
            >
              Save
            </button>
          </form>
        </div>
      </div>
      <div className="bg-[#CCCACD33] mt-[100px] rounded-[4px] h-[1000px] border-b w-full text-white pt-[60px]">
        <div className="flex flex-col items-center gap-8 ">
          <div className="w-[240px] h-[240px] ">
            <img src={refer} alt="" />
          </div>
          <div className="flex items-center flex-col">
            <h1 className="text-[30px] text-[#5D585D] font-bold">
              Refer a Friend
            </h1>
            <p className="text-[20px] text-[#5D585D] font-light">
              And you can both earn 100 SB Tokens
            </p>
            <span className="text-[#5D585D] text-[22px] flex gap-4 items-center pt-5">
              <FaRegCircleQuestion />
              <h2 className="text-[22px] text-[#5D585D] font-bold">
                How it works
              </h2>
            </span>
          </div>
        </div>

        <div className="mt-[40px] flex flex-col gap-6 pl-8">
          <div className="flex gap-4">
            <span className="w-[40px] h-[40px] flex justify-center items-center rounded-[50%] bg-[#800080] bg-opacity-75 text-[20px] ">
              <p>1</p>
            </span>
            <p className="text-[20px] pt-1 text-[#5D585D] font-normal">
              Just share your referral code
            </p>
          </div>
          <div className="flex gap-4">
            <span className="w-[40px] h-[40px] flex justify-center items-center rounded-[50%] bg-[#800080] bg-opacity-75 text-[20px] ">
              <p>2</p>
            </span>
            <p className="text-[20px] pt-1 text-[#5D585D] font-normal">
              They sign up for a live course with your referral code
            </p>
          </div>
          <div className="flex gap-4">
            <span className="w-[40px] h-[40px] flex justify-center items-center rounded-[50%] bg-[#800080] bg-opacity-75 text-[20px] ">
              <p>3</p>
            </span>
            <p className="text-[20px] pt-1 text-[#5D585D] font-normal">
              They hit the road with 100 SB Tokens
            </p>
          </div>
          <div className="flex gap-4">
            <span className="w-[40px] h-[40px] flex justify-center items-center rounded-[50%] bg-[#800080] bg-opacity-75 text-[20px] ">
              <p>4</p>
            </span>
            <p className="text-[20px] pt-1 text-[#5D585D] font-normal">
              You get 100 SB Token
            </p>
          </div>
          <div className="flex gap-4">
            <span className="w-[40px] h-[40px] flex justify-center items-center rounded-[50%] bg-[#800080] bg-opacity-75 text-[20px] ">
              <p>5</p>
            </span>
            <button className="w-[50%] border-2 py-1 flex justify-start items-center pl-6 rounded-[24px] text-[24px] text-[#5D585D] border-[#5D585D] ">
              <div className="flex justify-between items-center w-full pr-4">
                <p className="text-[20px] pt-1  text-[#5D585D] font-normal">
                  YSBope111vnq
                </p>
                <IoMdCopy />
              </div>
            </button>
          </div>
          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="bg-buttonbg text-blackbase text-[20px] font-bold px-4 py-[12px] mt-[45px] flex gap-4 items-center justify-center w-2/5 rounded-[4px]"
            >
              <RiUpload2Line />
              <p className="text-[16px] ">Refer friends now</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileSettings