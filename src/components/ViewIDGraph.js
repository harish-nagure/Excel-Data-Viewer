import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import DataGraphCallScore from './DataGraphCallScore';
// import DataGraphOverScore from './DataGraphOverScore';
import InterestLevelGauge from './InterestLevelGauge';

import OverAllScoreGraph from './OverAllScoreGraph';

const ViewIDGraph = () => {

    const location = useLocation(); 
    const data = location.state;
    console.log(data);
    const navigate = useNavigate();

  

    return (
        <div className="min-h-screen bg-gradient-to-r from-green-100 via-green-10 to-green-100 p-6">
        <h1 className="text-center text-secondary text-4xl font-extrabold mb-10">
            Excel Data Viewer for Nousteam
        </h1>
        <div className="max-w-7xl mx-auto bg-white p-8 border border-black shadow-lg rounded-3xl">
        <div className="p-4">
          <button
            className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-md"
            onClick={() => {
              navigate('/');
          }} 
          >
            Back to Table
          </button>
          <div >
          <div className="mt-10">
              <h2 className="text-secondary text-2xl font-bold mb-6 border-b-2 border-primary pb-2">
                Graphs
              </h2>
              <div className="flex flex-col lg:flex-row gap-10">
              <div className="bg-gray-100 rounded-lg shadow-lg p-6 flex-1 border border-gray-300 hover:shadow-2xl hover:bg-white  transition-shadow duration-300">
                  <DataGraphCallScore data={data} />
                </div>
                <div className=" bg-gray-100 rounded-lg shadow-lg p-6 flex-1 border border-gray-300 hover:shadow-2xl hover:bg-white  transition-shadow duration-300">
                  
                <p style={{ textAlign: 'center', marginTop: '10px', fontSize: '16px', fontWeight: 'bold'}}>
                      Overall Score: {data['Overall Call score']} / 5
                  </p>
                  <OverAllScoreGraph data={data} />
                   
                </div>
              </div>
            </div>
            <div className="mt-10">
              <h2 className="text-secondary text-2xl font-bold mb-6 border-b-2 border-primary pb-2">
                Gauge Chart for Interest Level
              </h2>
              <div className="grid grid-cols-1  sm:grid-cols-1 lg:grid-cols-1 gap-8  px-96 sm:px-10 lg:px-96">              
                  <div
                    className="bg-gray-100 border border-gray-300 rounded-lg shadow-md p-6 flex flex-col items-center hover:bg-white hover:shadow-2xl"
                    >
                    <InterestLevelGauge callData={data}/>
                    <p className="text-secondary font-medium mt-4">Call ID: <strong>{data["Call_ID"]}</strong></p>
                  </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        </div>
        
    );
};

export default ViewIDGraph;