import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const AgentFeedback = ({ excelData }) => {
  const location = useLocation();
  const call = location.state; 

  const [feedback, setFeedback] = useState('');

  useEffect(() => {
    console.log("Excel Data in AgentFeedback:", excelData);
    console.log("Call Data from Navigation:", call);

    if (call) {
     
      setFeedback(call["Agent Feedback"] || "No feedback available.");
    } else {
      setFeedback("No matching call found.");
    }
  }, [call, excelData]);

  return (
    <div className="w-full mx-auto  bg-white rounded-lg ">
      <h2 className="text-xl font-bold mb-2 text-black">Agent Feedback</h2>


<p className="text-sm text-gray-500 mb-4">Feedback for the agent to improve</p>

      <textarea
        value={feedback}
        readOnly
        placeholder="Enter your feedback here..."
        className="w-full h-32 p-4 bg-gray-100 border border-gray-300 rounded-lg resize-none"
      />
    </div>
  );
};

export default AgentFeedback;