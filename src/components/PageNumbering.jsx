import React from 'react'
import { FaAngleRight } from "react-icons/fa";


const PageNumbering = () => {
  return (
    <div className="flex gap-4 justify-center mt-8 items-center h-[150px]">
      <button className="h-[40px] w-[40px] rounded-[4px] bg-transparent border border-purple text-primary font-bold">
        1
      </button>
      <button className="h-[40px] w-[40px] rounded-[4px] bg-transparent border border-purple text-primary font-bold">
        2
      </button>
      <button className="h-[40px] w-[40px] rounded-[4px] bg-transparent border border-purple text-primary font-bold">
        3
      </button>
      <button className="h-[40px] w-[40px] rounded-[4px] bg-transparent border border-purple text-primary font-bold">
        4
      </button>
      <button className="h-[40px] w-[40px] rounded-[4px] bg-transparent border border-purple text-primary font-bold">
        5
      </button>
      <p className="h-[40px] w-[40px]  bg-transparent text-primary font-bold">
        . . .
      </p>
      <button className="h-[40px] w-[40px] rounded-[4px] bg-transparent border border-purple text-primary font-bold">
        9
      </button>
      <button className="flex items-center gap-2 text-[18px] h-[40px] bg-transparent text-primary font-bold">
        Next <FaAngleRight/>
      </button>
      
    </div>
  );
}

export default PageNumbering