// import React from "react";
import Header1 from "../components/Header1";
import Sidebar from "../components/Sidebar";
import OpportunityHubTabs from "./OpportunityHubTabs";


const OpportunityPage = () => {
  return (
    <div className="h-screen w-full flex justify-start items-start bg-whitebg">
      <Sidebar />
      <div className="w-4/5 h-full overflow-auto flex flex-col gap-8 px-[5%] pt-8">
        <Header1 />
        <div className="w-full">
          <OpportunityHubTabs
            heading="Opportunity Hub"
            tabOne="Job Listing"
            tabTwo="Internships"
          />
        </div>
      </div>
    </div>
  );
};

export default OpportunityPage;
