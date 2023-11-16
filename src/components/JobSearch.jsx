
import { VscSearch } from "react-icons/vsc";

const JobSearch = () => {
  return (
    <div className="bg-white100 w-[25%] h-[48px] rounded-[24px] flex items-center px-6 font-semibold text-[20px] justify-between">
    <VscSearch />
    <input
      type="text"
      placeholder="Enter a keyword"
      className=" w-full bg-transparent outline-none placeholder:text-[18px] placeholder:px-3"
    />
  </div>
  );
};

export default JobSearch;
