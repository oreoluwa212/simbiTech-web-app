import { profile } from "../assets";

const Profile = () => {
    return ( 
        <div>
          <img
            className="shadow-2xl rounded-[50%] border border-whitebg"
            src={profile}
            alt="User Image"
          />
          <h1 className="mt-[20px] font-bold text-2xl">Ope Daniels</h1>
        </div>
     );
}
 
export default Profile;