import React from "react";
import { data } from '../data'



function Material() {
  return (
    <section className="mt-5 ">
      <div className="flex justify-between">
        <h1 className="mb-6 font-bold text-[#2B002B] text-3xl">Material Libary</h1>
        <p className="underline text-[18px] font-semibold text-primary">See all</p>
      </div>
      <div className="flex gap-4 ">
        {data.map((course, id)=>(
          <div key={id} className=" bg-white p-[1.2rem] border border-[#DFE1E6] rounded-2xl shadow-xl w-full max-w-sm">
          <div className="flex gap-4">
            <img src={course.image} alt="User Image" />
            <div>
              <p className="font-bold text-[#2B002B] text-medium text-xl text-center mb-4">
                {course.materialtitle}
              </p>
              <p className=" text-xs text-center">{course.author}</p>
            </div>
          </div>
        </div>
        ))

        }
      </div>
    </section>
  );
}

export default Material;
