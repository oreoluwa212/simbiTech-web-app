import LoginCard from "../components/LoginCard";

const LogIn = () => {
    return (
      <div className="bg-login-bg bg-cover bg-no-repeat bg-center h-screen flex font-source relative">
        <div className="flex justify-center items-center w-full absolute inset-0 bg-purple opacity-70"></div>
        <div className="w-full">
          <div className="relative">
            <LoginCard />
          </div>
        </div>
      </div>
    );
}
 
export default LogIn;