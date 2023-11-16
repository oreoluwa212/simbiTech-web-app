import { Link } from "react-router-dom";
import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';


const Form = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    return (
      <>
        <form onSubmit={() => {}} className="w-4/5 pt-4">
          <label htmlFor="email" className="mb-2 block font-medium text-[16px]">
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
            className="border border-gray-300 outline-none rounded px-2 py-2 mb-4 block w-full"
            value={confirmPassword}
            onChange={(ev) => setConfirmPassword(ev.target.value)}
          />
          <label className="flex items-center">
            <input type="checkbox" className=" w-6 h-4" />
            <p className="text-[16px]">Remember me</p>
          </label>

          <button
            type="submit"
            className="bg-buttonbg text-blackbase text-[16px] font-bold px-4 py-[12px] mt-[24px] rounded w-full"
          >
            Sign Up
          </button>
          <p className="text-[16px] mt-2">
            Already have an account?{" "}
            <Link to="/login" className="ml-1 font-bold text-purple">
              Log In
            </Link>
          </p>
        </form>
      </>
    );
}
 
export default Form;
