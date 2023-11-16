import { coursesData } from "../utilities/coursesData";

const CoursesCard = () => {
  return (
    <div className="w-full">
      {coursesData.map((course) => (
        <div
          key={course.id}
          className="py-8 px-3 flex flex-col mt-6 w-[100%] rounded-[4px] shadow-shadow-100 bg-customBg"
        >
          <div className="flex flex-row items-center gap-1">
            <div>
              <img src={course.imageUrl} alt="" />
            </div>
            <div className="flex flex-col">
              <h2 className="text0primary font-source-sans-pro text-[1.2rem] font-bold leading-7 whitespace-nowrap">
                {course.name}
              </h2>
              <span className="text-primary text-sm font-light leading-[19px]">
                {course.author}
              </span>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div>
              <p className="text-primary text-[16px] font-light leading-[19px] font-source-sans-pro">
                {course.payment}
              </p>
              <p className="text-primary font-source-sans-pro font-bold text-sm leading-[19px]">
                {course.duration}
              </p>
            </div>
            <div>
              <button className="bg-[#BF80BF] w-[100px] h-[42px] rounded-lg text-white font-bold">{course.route}</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CoursesCard;
