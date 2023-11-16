import Form from "./Form";


const SignupCard = () => {
    return ( 
        <div className="w-full">
            <div className="bg-whitebg w-full h-[550px] rounded-xl mt-[32px] flex flex-col items-center ">
                <h1 className="text-black font-bold mt-[47px] text-2xl">Sign Up to Create an Account</h1>
                <p className="font-normal mt-[8px]">Fill in your details to start your career as a woman in Tech.</p>
                <Form />
                
            </div>
        </div>
     );
}
 
export default SignupCard;