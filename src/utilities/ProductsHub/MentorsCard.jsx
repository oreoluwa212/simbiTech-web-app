import React from "react";
import { mentors } from "../data";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";

function MentorsCard() {
  return (
    <section className="mt-5 ">
      <div className="grid grid-cols-2 gap-[30px] w-4/5 ">
        {mentors.map((mentor, id) => (
          <div
            key={id}
            class=" max-w-sm bg-white border-r-8 border-b-8 border-[#2B002B]  rounded-lg shadow-xl mb-12"
          >
            <a href="#">
              <img
                class="p-4 rounded-t-lg"
                src={mentor.featureimg}
                alt="product image"
              />
            </a>
            <div class="px-5 pb-4">
              <div className="flex justify-between gap-2 p-2">
                <a href="#">
                  <h5 class="text-2xl font-semibold tracking-tight text-[#2B002B] ">
                    {mentor.title}
                  </h5>
                </a>
                <span>
                  <AiOutlineHeart className="text-3xl" />
                </span>
              </div>
              <div className="flex  align-middle justify-between px-2">
                <a href="#">
                  <h5 class=" font-semibold tracking-tight  text-gray-500">
                    {mentor.author}
                  </h5>
                </a>
                <span className="flex">
                  <AiFillHeart className="text-xl text-[#2B002B]" />
                  <p>{mentor.rating}</p>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MentorsCard;
