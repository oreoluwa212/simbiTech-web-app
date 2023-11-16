// import React from 'react'

import { AddIcon } from "../assets"

const JobButton = () => {
  return (
    <button className="bg-primarybase flex flex-row gap-[.625rem] items-center px-4 py-[.625rem]">
     <img src={AddIcon} alt="" />
       <span className="text-whitebg text-base font-source-sans-pro font-bold leading-[19.2px] mt-2">
       Add Job
       </span>
    </button>
  )
}

export default JobButton