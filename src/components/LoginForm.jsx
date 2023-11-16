import { Link } from "react-router-dom";
import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";


const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const navigate = useNavigate();
    return (
      <>
        <form onSubmit={() => {
          console.log("oreo");
          navigate("/overview")
      
      }} className="w-4/5 pt-4">
          <label htmlFor="email" className="mb-2 font-medium text-[16px]">
            Email Address
          </label>
          <input
            placeholder="Enter your email address"
            type="text"
            className="border border-gray-300 outline-none rounded px-2 py-2 mb-4 block w-full"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
          />
          <label
            htmlFor="password"
            className="mb-2 block font-medium text-[16px]] relative"
          >
            Create Password
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
            className="border border-gray-300 outline-none rounded px-2 py-2 mb-4 block w-full pr-10"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
          />

          <div className="flex flex-row justify-between w-full">
            <div className="flex items-center">
              <input type="checkbox" className=" w-6 h-4" />
              <p className="text-[16px]">Remember me</p>
            </div>
            <div className="">
              <h2 className="font-semibold text-purple underline">
                Forget Password?
              </h2>
            </div>
          </div>

          <button
            type="submit"
            className="bg-buttonbg text-blackbase text-[16px] font-bold px-4 py-[12px] mt-[24px] rounded w-full"
          >
            Log In
          </button>
          <div className="text-[16px] mt-2 flex gap-2">
            <p>Don&apos;t have an account?</p>
            <Link
              to="/signup"
              className="font-bold text-purple cursor-pointer"
            >
              Sign Up
            </Link>
          </div>
        </form>
      </>
    );
}
 
export default LoginForm;
