import { email, logoVector } from "../assets";

const Verification = () => {
    return ( 
        <div className="flex flex-col items-center mt-[140px]">
            <div className="border-2 border-[#800080] w-[630px] h-[430px] flex flex-col items-center">
                <div className="flex flex-row gap-3 mt-[59px]">
                    <img src={logoVector} alt="Simbitech logo" />
                    <h1 className="text-blackbase text-[30px] font-semibold mt-2">SimbiTech</h1>
                </div>
                <p className="mt-[30px]">Check your inbox to verify your email</p>
                <img className="mt-[20px]" src={email} alt='email logo' />
                <div>
                    <p className="font-light">We sent a verification link to:</p>
                    <p className="font-medium">Ope111@gmail.com</p>
                </div>
                <button className="font-medium text-purple mt-[35px]">Resend Verification link</button>
                
            </div>
        </div>
     );
}
 
export default Verification;