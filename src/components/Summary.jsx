import { upthumbIcon } from "../assets";

const Summary = () => {
    return ( 
        <div className="flex flex-col gap-y-5 mt-4">
            <div className="w-full h-[1px] rounded-full bg-black050 mb-8 mt-4"/>
            <p  className="text-2xl font-normal ">Summary</p>
            <p  className="text-xl font-normal ">In the last <span className="text-purple">20 Days</span>, you have been able to register for <span className="text-purple">4 courses ,</span> which are both tech courses and soft skills. Your progress has been prominent.</p>

            <p className="text-xl font-normal">With this analysis, your job readiness is evaluated at <span className="text-purple">30%</span>.</p>
            <div className="flex flex-row gap-3">
                <img src={upthumbIcon} alt="upThumbIcon" />
                <p className="text-xl font-normal">Go girl, we are rooting for you.</p>
            </div>
            <div className="mb-10">
                <button
                type="submit"
                className="bg-buttonbg text-blackbase text-[16px] font-bold px-4 py-[12px] mt-[24px] rounded w-[468px]"
                >
                    Apply for a Job
                </button>
            </div>
            
        </div>
     );
}
 
export default Summary;