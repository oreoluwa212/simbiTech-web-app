import React from "react";
import data from '../data';
import Button from "../../components/Button";



function ProductCourses() {
  return (
    <section className="mt-6 ">
      
      <div className="flex gap-6 ">
        {data.map((course, id)=>(
          <div key={id} className=" bg-white p-[1.2rem] border border-[#DFE1E6] rounded-xl shadow-xl w-full max-w-sm">
          <div className="flex gap-2">
            <img src={course.image} alt="User Image" />
            <div>
              <p className="font-bold text-[#2B002B] text-medium text-xl mb-2">
                {course.materialtitle}
              </p>
              <p className=" text-xs">{course.author}</p>
            </div>
          
          </div>
          <div className="flex mt-6 justify-between ">
           <span className="text-center">
             <p>{course.status}</p>
           <p className="font-bold text-[#2B002B]">{course.duration}</p>
           </span>
          <Button  style={{ backgroundColor: '#BF80BF', color: 'white' }}>Join Now</Button>
           </div>
        </div>
        ))
        }
      </div>
    </section>
  );
}

export default ProductCourses;
