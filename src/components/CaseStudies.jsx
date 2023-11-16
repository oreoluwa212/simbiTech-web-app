import React from 'react'
import { cases } from '../utilities/materialsData'
import { FaEye } from "react-icons/fa";

const CaseStudies = () => {
  return (
    <div className='grid grid-cols-3 gap-8 text-primary'>
      {cases.map((casestudy) =>{
         return (
           <div key={casestudy.id} className="flex flex-col p-2">
             <div className="h-[300px]">
               <img
                 className=" w-full h-full object-cover shadow-md"
                 src={casestudy.imageUrl}
                 alt=""
               />
             </div>
             <div className="flex justify-between w-full pt-2 px-1">
               <div className="">
                 <h3 className="font-semibold">{casestudy.name}</h3>
                 <p className="text-[14px] font-medium">{casestudy.author}</p>
               </div>
               <div className="flex items-center gap-2">
                 <FaEye />
                 <p className="font-medium">{casestudy.views}</p>
               </div>
             </div>
           </div>
         );
      })}
    </div>
  )
}

export default CaseStudies;