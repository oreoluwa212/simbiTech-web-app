import {
  AvatarOne,
  AvatarTwo,
  AvatarThree,
  AvatarFour,
  Time,
} from "../assets";

// eslint-disable-next-line react/prop-types
const JobCard = ({jobPost, jobTitle, jobRole1, jobRole2, jobRole3, jobImg, jobNumber, jobNotifications}) => {
  return (
    <div className="rounded-[4px] bg-whitebg shadow-shadow-100 p-8">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-primary font-source-sans-pro text-sm font-normal leading-[19.2px]">
            {jobPost}
          </p>
          <h1 className="text-primary text-[1.6rem] font-bold leading-[38.4px]">
            {jobTitle}
          </h1>
          <div className="flex flex-row items-start gap-[1.1rem] mt-[1.5rem]">
            <p className="bg-white-200 rounded-[24px] p-[.5rem] text-primary text-center font-sm font-bold leading-[16.8px]">
              {jobRole1}
            </p>
            <p className="bg-white-200 rounded-[24px] p-[.5rem] text-primary text-center font-sm font-bold leading-[16.8px]">
              {jobRole2}
            </p>
            <p className="bg-white-200 rounded-[24px] p-[.5rem] text-primary text-center font-sm font-bold leading-[16.8px]">
             {jobRole3}
            </p>
          </div>
        </div>

        <div>
          <img src={jobImg} alt="Facebook Icon" />
        </div>
      </div>

      <div className="flex mt-[2rem] justify-between items-center">
        <div>
          <div className="flex items-center">
            <img src={Time} alt="" />
            <p className="text-primary font-source-sans-pro text-[1.2rem] font-normal leading-[28px] ml-3 mr-3">
              Be in the first <span className="font-bold">{jobNumber} Applicants</span>
            </p>
            <img src={AvatarOne} alt="" />
            <img src={AvatarTwo} alt="" />
            <img src={AvatarThree} alt="" />
            <img src={AvatarFour} alt="" />
            <p className="rounded-full bg-primary w-[40px] h-[40px] text-white-100 font-bold text-center leading-[19.2px] p-[.7rem]">{jobNotifications}</p>
          </div>
        </div>

        <div>
          <button className="bg-buttonbg rounded-[8px] px-[3rem] py-3">Apply</button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
