
import Sidebar from "../components/Sidebar";
import Courses from "./Courses";

const CoursesPage = () => {
  return (
    <div className=" bg-whitebg flex h-screen">
      <div className="w-1/5">
        <Sidebar />
      </div>
      <div className="w-full pt-6 pr-6 mb-6">
        <Courses />
      </div>
    </div>
  )
}

export default CoursesPage