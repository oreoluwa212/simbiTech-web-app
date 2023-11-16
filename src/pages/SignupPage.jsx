import Icon from "../assets/images/icon.svg";
import BookIcon from "../assets/images/book.svg";
import Logo from "../assets/images/logo.svg";
import Form from "../components/Form";
import SignupCard from "../components/SignupCard";

const SignUp = () => {
    return (
      <div className="bg-purple flex gap-10 pt-9 font-source h-screen px-[5%]">
        <div className="text-whitebg pt-[5%] font-normal flex flex-col w-3/6 justify-around">
          <div className=" flex justify-between w-full pl-[10%] items-center">
            <div className="flex items-center gap-4">
              <img src={Logo} alt="Logo" />
              <h2 className="text-3xl font-bold">SimbiTech</h2>
            </div>
            <div className="">
              <img className="h-[120px] w-[120px]" src={Icon} alt="Icon" />
            </div>
          </div>
          <div className="h-[300px] flex flex-col justify-center items-start pl-[15%] gap-10">
            <p className="text-center text-2xl italic">
              &apos;Unlock your tech potential and pave your own digital future
              with Simbitech – Empowering Women in Tech!&apos;
            </p>
            <div className="pl-6 h-[120px] w-120px]">
              <img className="w-full" src={BookIcon} alt="BookIcon" />
            </div>
          </div>
        </div>
        <div className="w-3/6">
          <SignupCard />
        </div>
        <div className="flex flex-col justify-around h-full w-1/6">
          <img className="h-[120px]" src={Icon} alt="Icon" />
          <img className="h-[120px]" src={BookIcon} alt="BookIcon" />
        </div>
      </div>
    );
}
 
export default SignUp;