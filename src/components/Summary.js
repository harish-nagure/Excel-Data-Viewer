import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { RiRobot2Line } from 'react-icons/ri';


const Summary = ({ excelData }) => {
  const location = useLocation();
  const call = location.state;

  const [summary, setSummary] = useState('');

  useEffect(() => {
    console.log("Excel Data in Summary:", excelData);
    console.log("Call Data from Navigation:", call);

    if (call) {
      // Extract Summary column from matched Call_ID
      setSummary(call["Summary"] || "No summary available.");
    } else {
      setSummary("No matching call found.");
    }
  }, [call, excelData]);

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg ">
      <h2 className="text-xl font-bold mb-2 text-black">Summary</h2>
      <p className="text-sm text-gray-500 mb-4">Summary of the call</p>
      <div className="bg-gray-200 p-6 rounded-lg mb-4">
      <div className="flex items-center mb-4">
        <div className=" flex w-8 h-8 text-gray-700 mr-2 bg-white rounded-full items-center justify-center">
        <RiRobot2Line className='w-5 h-5'  />
        </div>
          <h6 className="text-sm font-semibold text-gray-700">AI Summary</h6>
        </div>

      <div className='relative'>
      <textarea
        value={summary}
        readOnly
        placeholder="Enter your summary here..."
            className="w-full h-32 p-4 border border-gray-300 rounded-lg focus:outline-none"
    
      />
      </div>
      </div>
    </div>
  );
};

export default Summary;