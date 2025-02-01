import React from 'react';
import { useLocation } from 'react-router-dom';


import DashboardSidebar from './DashboardSidebar';
import DataGraphOverScore from './DataGraphOverScore';
import DataGraphCallScore from './DataGraphCallScore';
import InterestLevelGauge from './InterestLevelGauge';
import DashboardHead from './DashboardHead';
import Summary from './Summary';
import AgentFeedback from './AgentFeedback';


const ViewIDGraph = () => {

    const location = useLocation(); 
    const data = location.state;
    console.log(data);
    // const navigate = useNavigate();

  

    return (
      <div className="flex font-inter">

      <div className="bg-white w-80 h-screen fixed ">
      <DashboardSidebar />
      </div>
      
      <main className="flex-1 ml-80" style={{ backgroundColor: "#F5F6FA" }}>
        <DashboardHead/>


        <div className="bg-gray-100 p-8 mt-4">
          <h1 className="text-3xl font-bold">Call <span className="text-[#8204FF]">Statistics</span></h1>
          <p className="text-base text-gray-700 font-semibold">Track Call Progress and Insights</p>

        
          <div className="grid lg:grid-cols-2 gap-6 mt-8 items-center h-full 3xl:grid-cols-3">

            <div className="bg-white p-6 rounded-2xl shadow-md">
              <DataGraphCallScore data={data} />
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <DataGraphOverScore data={data} />
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <InterestLevelGauge data={data} />
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <Summary data={data} />
            </div>
            
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md mt-10">
            <AgentFeedback  data={data} />
          </div>


        </div>
      </main>
    </div>
    );
};

export default ViewIDGraph;