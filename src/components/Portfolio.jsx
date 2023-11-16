import React from 'react'
import { portfolio } from '../utilities/materialsData'
import { FaEye } from "react-icons/fa";

const Portfolio = () => {
  return (
    <div className='w-full grid grid-cols-3 gap-8 text-primary'>
      {portfolio.map((pfolio) =>{
         return (
           <div key={pfolio.id} className="flex flex-col ">
             <div className="h-[300px]">
               <img
                 className=" w-full h-full object-cover shadow-md"
                 src={pfolio.imageUrl}
                 alt=""
               />
             </div>
             <div className="flex justify-between w-full pt-2 px-1">
               <div className="">
                 <h3 className='font-semibold'>{pfolio.name}</h3>
                 <p className='text-[14px] font-medium'>{pfolio.author}</p>
               </div>
               <div className="flex items-center gap-2">
                  <FaEye/>
                  <p className='font-medium'>{pfolio.views}</p>
               </div>
             </div>
           </div>
         );
      })}
    </div>
  )
}

export default Portfolio