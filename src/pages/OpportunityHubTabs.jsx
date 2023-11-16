import React, { useState } from "react";
import JobButton from "../components/JobButton";
import JobSearch from "../components/JobSearch";
import JobCard from "../components/JobCard";
import { Facebook, Google, Sahara, Twitter } from "../assets";

const OpportunityHubTabs = () => {
  const [activeScreen, setActiveScreen] = useState(1);

  return (
    <div className="w-full bg-whitebg">
      <div className=" flex flex-col gap-8 ">
        <div className="">
          <div className=" bg-lilac border h-[60px] rounded-t-[8px] mt-[2rem]">
            <h2 className="text-[29px] font-bold text-primary px-8">
              Opportunity Hub
            </h2>
          </div>
          <div className="w-full bg-lilac h-[80px] rounded-b-[8px]">
            <div className="flex flex-row px-8 gap-16 text-[22px] justify-start items-center text-primary font-medium h-[92px]  ">
              <button
                onClick={() => setActiveScreen(1)}
                className={
                  activeScreen === 1
                    ? "text-primary border-primary border-b-4 pb-[4px] font-bold px-[12px]"
                    : "px-[12px]"
                }
              >
                Job Listing
              </button>
              <button
                onClick={() => setActiveScreen(2)}
                className={
                  activeScreen === 2
                    ? "text-primary border-primary border-b-4 pb-[24px] font-bold px-[12px]"
                    : "px-[12px]"
                }
              >
                Internships
              </button>
            </div>
          </div>
        </div>
        {activeScreen === 1 ? (
          <>
            <div className="flex items-start justify-between mt-[1.5rem]">
              <JobButton />
              <JobSearch />
            </div>

            <div className="mt-[1.5rem] flex flex-col gap-12">
              <JobCard
                jobPost="Facebook"
                jobTitle="Senior Product Designer"
                jobRole1="User Interface"
                jobRole2="User Experience"
                jobRole3="User Research"
                jobImg={Facebook}
                jobNumber="10"
                jobNotifications="8"
              />
              <JobCard
                jobPost="Twitter"
                jobTitle="Senior Product Designer" jobRole1="User Interface" jobRole2="User Experience" jobRole3="User Research" 
                jobImg={Twitter}
                jobNumber="30"
                jobNotifications="28"
              />
              <JobCard
                jobPost="Sahara Energy Corporated"
                jobTitle="Junior Programs Manager" jobRole1="Programs" jobRole2="Operations" 
                jobRole3="Communications" 
                jobImg={Sahara}
                jobNumber="20"
                jobNotifications="18"
              />
               <JobCard
                jobPost="Google"
                jobTitle="Senior Product Manager" jobRole1="User Research" jobRole2="Operations" 
                jobRole3="Product Specialist" 
                jobImg={Google}
                jobNumber="50"
                jobNotifications="45+"
              />
              <JobCard
                jobPost="Sabitech"
                jobTitle="Junior Product Designer"
                jobRole1="User Interface"
                jobRole2="User Experience"
                jobRole3="User Research"
                jobImg={Sahara}
                jobNumber="25"
                jobNotifications="20"
              />
              <JobCard
                jobPost="Facebook"
                jobTitle="Senior Software Developer"
                jobRole1="React Native"
                jobRole2="JavaScript"
                jobRole3="Node JS"
                jobImg={Facebook}
                jobNumber="30"
                jobNotifications="28"
              />
              <JobCard
                jobPost="Google"
                jobTitle="Data Analyst"
                jobRole1="SQL"
                jobRole2="Excel"
                jobRole3="Power BI"
                jobImg={Google}
                jobNumber="15"
                jobNotifications="10"
              />
            </div>
          </>
        ) : activeScreen === 2 ? (
          <>
            <div className="flex items-start justify-between mt-[1.5rem]">
              <JobButton />
              <JobSearch />
            </div>

            <div className="mt-[1.5rem] flex flex-col gap-12 ">
              <JobCard
                jobPost="Facebook"
                jobTitle="Senior Product Designer"
                jobRole1="User Interface"
                jobRole2="User Experience"
                jobRole3="User Research"
                jobImg={Facebook}
                jobNumber="10"
                jobNotifications="8"
              />
              <JobCard
                jobPost="Twitter"
                jobTitle="Senior Product Designer" jobRole1="User Interface" jobRole2="User Experience" jobRole3="User Research" 
                jobImg={Twitter}
                jobNumber="30"
                jobNotifications="28"
              />
              <JobCard
                jobPost="Sahara Energy Corporated"
                jobTitle="Junior Programs Manager" jobRole1="Programs" jobRole2="Operations" 
                jobRole3="Communications" 
                jobImg={Sahara}
                jobNumber="20"
                jobNotifications="18"
              />
               <JobCard
                jobPost="Google"
                jobTitle="Senior Product Manager" jobRole1="User Research" jobRole2="Operations" 
                jobRole3="Product Specialist" 
                jobImg={Google}
                jobNumber="50"
                jobNotifications="45+"
              />
              <JobCard
                jobPost="Sabitech"
                jobTitle="Junior Product Designer"
                jobRole1="User Interface"
                jobRole2="User Experience"
                jobRole3="User Research"
                jobImg={Sahara}
                jobNumber="25"
                jobNotifications="20"
              />
              <JobCard
                jobPost="Facebook"
                jobTitle="Senior Software Developer"
                jobRole1="React Native"
                jobRole2="JavaScript"
                jobRole3="Node JS"
                jobImg={Facebook}
                jobNumber="30"
                jobNotifications="28"
              />
              <JobCard
                jobPost="Google"
                jobTitle="Data Analyst"
                jobRole1="SQL"
                jobRole2="Excel"
                jobRole3="Power BI"
                jobImg={Google}
                jobNumber="15"
                jobNotifications="10"
              />
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default OpportunityHubTabs;
