import React from 'react';
import { useLocation } from 'react-router-dom';


import DashboardSidebar from './DashboardSidebar';
import DataGraphOverScore from './DataGraphOverScore';
import DataGraphCallScore from './DataGraphCallScore';
import InterestLevelGauge from './InterestLevelGauge';
import DashboardHead from './DashboardHead';
import Summary from './Summary';
import AgentFeedback from './AgentFeedback';
import AgentInfo from './AgentInfo';

const ViewIDGraph = () => {
  const location = useLocation();
  const data = location.state;

  return (
    <div className="flex font-inter min-h-screen">

      <div className="bg-white h-screen hidden lg:block fixed z-20 w-72">
        <DashboardSidebar />
      </div>

      <main className="flex-1 lg:ml-80" style={{ backgroundColor: "#F5F6FA" }}>
        <DashboardHead />

        <div className="bg-gray-100 p-4 md:p-8 mt-4">
          <h1 className="text-3xl font-bold">
            Call <span className="text-[#8204FF]">Statistics</span>
          </h1>
          <p className="text-base text-gray-700 font-semibold">
            Track Call Progress and Insights
          </p>

          <div className="grid gap-4 mt-6 md:gap-6 items-center grid-cols-1 md:grid-cols-2 3xl:grid-cols-3">
            <div className="bg-white p-4 md:p-6 rounded-2xl shadow-md">
              <DataGraphCallScore data={data} />
            </div>
            <div className="bg-white p-4 md:p-6 rounded-2xl shadow-md">
              <DataGraphOverScore data={data} />
            </div>
            <div className="bg-white p-4 md:p-6 rounded-2xl shadow-md">
              <InterestLevelGauge data={data} />
            </div>
            <div className="bg-white p-4 md:p-6 rounded-2xl shadow-md">
              <Summary data={data} />
            </div>
            <div className="bg-white p-4 md:p-6 rounded-2xl shadow-md">
              <AgentInfo data1={data} />
            </div>
            
          </div>

          <div className="bg-white p-4 md:p-6 rounded-2xl shadow-md mt-6">
            <AgentFeedback data={data} />
          </div>
          


        </div>
      </main>
    </div>
  );
};

export default ViewIDGraph;
