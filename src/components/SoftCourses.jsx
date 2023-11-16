import React from "react";
import ProgressBar from "../utilities/ProductsHub/ProgressBar";
import { softSkillData } from "../utilities/data";

const testData = [{ bgcolor: "#6a1b9a", completed: 50 }];
const SoftCourses = () => {
    return ( 
    <section className="mt-5 ">
      <div className="flex justify-between">
        <h1 className="mb-6 font-bold text-[#2B002B] text-3xl">My Soft Skills</h1>
      </div>
      <div className="flex gap-4 ">
        {softSkillData.map((course, id)=>(
          <div key={id} className=" bg-white p-[1.2rem] border border-[#DFE1E6] rounded-2xl shadow-xl w-full max-w-sm">
          <div className="flex gap-4">
            <img src={course.image} alt="User Image" />
            <div>
              <p className="font-bold text-[#2B002B] text-medium text-xl">
                {course.title}
              </p>
              <p className=" text-xs">{course.author}</p>
              <div>
                {testData.map((item, idx) => (
                  <div className="mt-4 ">
                    <ProgressBar
                      key={idx}
                      bgcolor={item.bgcolor}
                      completed={item.completed} 
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        ))

        }
      </div>
    </section>
  );
}
 
export default SoftCourses;