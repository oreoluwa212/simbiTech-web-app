import React from 'react'
import { data } from '../data'
import {AiOutlineHeart} from 'react-icons/ai'
import {AiFillHeart} from 'react-icons/ai';

function FeaturesMentor () {
  return (
    
 <section className="mt-5 ">
      <div className="flex justify-between">
        <h1 className="mb-6 font-bold text-[#2B002B] text-3xl">Featured Mentors</h1>
        <p className="underline text-[18px] font-semibold text-primary">See all</p>
      </div>
      <div className='flex gap-6'>
       
     {data.map((course, id)=>(
      <div key={id} class="w-full max-w-sm bg-white border-r-8 border-b-8 border-[#2B002B]  rounded-lg  shadow-xl  ">
    <a href="#">
        <img class="p-4 rounded-t-lg" src={course.featureimg} alt="product image" />
    </a>
    <div  class="px-2 pb-5">
     <div className='flex justify-between mb-2'> 
        <a href="#">
            <h5 class="text-2xl font-semibold tracking-tight text-[#2B002B] ">{course.title}</h5>
        </a>
        <span>
         <AiOutlineHeart className='text-3xl'/>
        </span>
        
       </div>
       <div className='flex  align-middle justify-between px-1 mb-2'> 
        <a href="#">
            <h5 class=" font-semibold tracking-tight  text-gray-500">{course.author}</h5>
        </a>
        <span className='flex'>
         <AiFillHeart className='text-xl text-[#2B002B]'/> 
         <p>{course.rating}</p>
        </span>
        </div>
       
    </div>
</div>))}
      </div>

</section>

  )
}

export default FeaturesMentor