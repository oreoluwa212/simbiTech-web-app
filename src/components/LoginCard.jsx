import { logoVector } from "../assets";
import LoginForm from "./LoginForm";
import React from "react";


const LoginCard = () => {
    return (
      <div className="flex justify-center items-center w-full h-screen">
        <div className="bg-whitebg w-[550px] h-[550px] rounded-xl flex flex-col items-center justify-center">
          <div className="flex flex-row gap-4">
            <img src={logoVector} alt="" />
            <h1 className="text-blackbase text-[30px] font-semibold">SimbiTech</h1>
          </div>
          <h1 className="text-black font-bold pt-8 text-2xl">Log In</h1>
          <p className="font-normal mt-[8px]">
            Welcome back, let&apos;s thrive today
          </p>
          <LoginForm />
        </div>
      </div>
    );
}

export default LoginCard;