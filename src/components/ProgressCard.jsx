import { progressData } from "../utilities/data";



const ProgressCard = () => {
    return ( 
        <div className="w-full h-30 flex justify-center items-center gap-10">
           {progressData.map((data, id) => (
                <div key={id} className="common-box card-layout">
                    <p>{data.count}</p>
                    <p>{data.name}</p>
                </div>
            ))}
        </div>
     );
}
 
export default ProgressCard;