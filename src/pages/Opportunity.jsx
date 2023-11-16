import React from 'react'
import data from '../utilities/opportunityhubdata';
import Button from '../components/Button';
import Opportunityhub from "../assets/images/opportunityhub.svg";
import { FaArrowRight } from "react-icons/fa";

export default function Opportunity() {
  return (
    <section className="mt-7 ">
      <div className="flex justify-center align-middle">
        <img src={Opportunityhub}></img>
      </div>
      <div className="grid grid-cols-2 ">
        {data.map((course, id) => (
          <div
            key={id}
            class="w-full max-w-sm h-[400px] bg-[#CCCACD] border-l-8 border-b-8 border-black-100  rounded-lg  shadow-md  "
          >
            <div className="flex justify-end mt-4 mr-2">
              <Button
                style={{
                  backgroundColor: "#7B7A7B",
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "65%",
                  height: "70px",
                  fontSize: "18px",
                }}
              >
                <FaArrowRight />
                &nbsp;Read More
              </Button>
            </div>

            <a href="#">
              <img
                class="p-4 rounded-t-lg mt-6"
                src={course.opportunityimg}
                alt="product image"
              />
            </a>
            <div class="px-5 pb-5">
              <div className="flex  align-middle gap-2 mb-2">
                <a href="#">
                  <h5 class="text-[30px] font-bold tracking-tight text-[#5D585D] ">
                    {course.opportunitytitle}
                  </h5>
                </a>
              </div>
              <div className="flex  align-middle justify-between mb-2">
                <a href="#">
                  <h5 class=" font-bold tracking-tight  text-gray-500">
                    {course.opportunitydesp}
                  </h5>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
