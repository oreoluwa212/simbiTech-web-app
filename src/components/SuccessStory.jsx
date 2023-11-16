import React, { useEffect, useState } from "react";
import { andrePic, hauwaPic, mattPic, polygon, uchePic } from "../assets";

const commentsData = [
  {
    text: " simbitech has helped me gain tech skills faster than I can imagine. I was able to learn product designs along side some soft skills that put me top of recruiters hiring criteria. I highly recommend simbitech to all black women seeking to start or transition into tech industry.",
    author: "Annabelle Andrew",
    role: "Product Designer",
    image: andrePic,
  },
  {
    text: "I remembered how clueless I was when tech topics were being mentioned, not only am I working in a tech company, but my company acknowledge my rapid growth and my dept of understanding. I went from being a beginner to a professional real quick",
    author: "Josephine Matthew",
    role: "Frontend Developer",
    image: mattPic,
  },
  {
    text: "simbitech has helped me gain tech skills faster than I can imagine. I was able to learn product designs along side some soft skills that put me top of recruiters hiring criteria. I highly recommend simbitech to all black women seeking to start or transition into tech industry.",
    author: "Ayomide Uchemba",
    role: "Data Analyst",
    image: uchePic,
  },
  {
    text: "I remembered how clueless I was when tech topics were being mentioned, not only am I working in a tech company, but my company acknowledge my rapid growth and my dept of understanding. I went from being a beginner to a professional real quick",
    author: "Hauwa Haruna",
    role: "Digital Marketer",
    image: hauwaPic,
  },
  {
    text: "I remembered how clueless I was when tech topics were being mentioned, not only am I working in a tech company, but my company acknowledge my rapid growth and my dept of understanding. I went from being a beginner to a professional real quick",
    author: "Mabel Obasi",
    role: "Product Manager",
    image: mattPic,
  },
];

const SuccessStory = () => {
  const [currentCommentIndex, setCurrentCommentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCommentIndex((prevIndex) =>
        prevIndex === commentsData.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentComment = commentsData[currentCommentIndex];

  return (
    <div className="h-[800px] bg-whitebg pb-48">
      <div className="pt-14 mx-[10%] h-[550px] flex flex-col max-w-[80%]">
        <div className="flex justify-center">
          <h1 className="text-[36px] font-bold">SUCCESS STORY</h1>
        </div>
        <div className="grid grid-cols-2 gap-3 pt-16">
          <div className="px-[24px] w-4/5 gap-14 flex flex-col justify-center ">
            <div className=" h-[100px] flex justify-end">
              <img className="flex justify-start" src={polygon} alt="" />
            </div>

            <div className="pr-[40px]">
              <h2 className=" text-[30px] text-center w-[350px] font-bold text-blackbase">
                Hear from some of our previous users
              </h2>
            </div>

            <div className="w-[100px] h-[100px]">
              <img className="flex justify-start" src={polygon} alt="" />
            </div>
          </div>

          <div className="bg-primary rounded-[8px] h-[550px] flex flex-col justify-center items-center ">
            <div className="h-[350px] w-4/5">
              <div className="border rounded-[4px] border-lilac  text-whitebg text-[20px] font-extralight p-3">
                <p className="leading-6 border-b border-lilac pb-8">
                  &apos;{currentComment.text}&apos;
                </p>
                <div className="flex py-8 gap-7">
                  <img src={currentComment.image} alt="" />
                  <div className="flex flex-col gap-3">
                    <h3 className="text-[20px] font-bold">
                      {currentComment.author}
                    </h3>
                    <p className="text-[18px] font-light">
                      {currentComment.role}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 mt-4 lgss:mt-10 ">
                {Array.from({ length: commentsData.length }).map((_, index) => (
                  <div
                    key={index}
                    className={`h-[20px] w-[20px] rounded-[50%] ${
                      index === currentCommentIndex ? "bg-lilac" : "bg-black050"
                    }`}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SuccessStory;
