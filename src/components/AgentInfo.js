import React from 'react';
import { useLocation } from 'react-router-dom';
import { FaCircleCheck, FaCircleXmark } from "react-icons/fa6";

const AgentInfo = ({ data }) => {
  const location = useLocation();
  const call = location.state;

  const getSymbol = (value) =>
    value?.toUpperCase() === "YES" ? (
      <FaCircleCheck color="green" />
    ) : (
      <FaCircleXmark color="red" />
    );

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg">
      <h2 className="text-xl font-bold mb-2 text-black">Agent Information</h2>
      <p className="text-sm text-gray-500 mb-4">Additional information on the agent</p>

      <div className="pt-4 rounded-lg mb-4">
        {call ? (
          <div className="grid lg:grid-cols-2 grid-cols-1 md:grid-cols-1 gap-4  px-2">
            {/* Column 1 */}
            <div className="flex flex-col space-y-2">

              <p className="flex items-center justify-between px-1 py-2">
                <span className="flex items-center">
                  {getSymbol(call?.Miscommunications)} 
                  <span className="ml-2">Miscommunications:</span>
                </span>
                <span>{call?.Miscommunications || "N/A"}</span>
              </p>

              <p className="flex items-center justify-between px-1 py-2">
                <span className="flex items-center">
                  {getSymbol(call?.Agent_clarity)} 
                  <span className="ml-2">Agent Clarity:</span>
                </span>
                <span>{call?.Agent_clarity || "N/A"}</span>
              </p>

              <p className="flex items-center justify-between px-1 py-2">
                <span className="flex items-center">
                  {getSymbol(call?.Unnecessary_jargon)} 
                  <span className="ml-2">Unnecessary Jargon:</span>
                </span>
                <span>{call?.Unnecessary_jargon || "N/A"}</span>
              </p>

              <p className="flex items-center justify-between px-1 py-2">
                <span className="flex items-center">
                  {getSymbol(call?.Unnecessary_jargon)} 
                  <span className="ml-2">Unnecessary Jargon:</span>
                </span>
                <span>{call?.Unnecessary_jargon || "N/A"}</span>
              </p>

            </div>

            {/* Column 2 */}
            <div className="flex flex-col space-y-2 ">
              
              <p className="flex items-center justify-between px-1 py-2">
                <span className="flex items-center">
                  {getSymbol(call?.Explicit_feedback)} 
                  <span className="ml-2">Explicit Feedback:</span>
                </span>
                <span>{call?.Explicit_feedback || "N/A"}</span>
              </p>

              <p className="flex items-center justify-between px-1 py-2">
                <span className="flex items-center">
                  {getSymbol(call?.Call_associated_with_Product)} 
                  <span className="ml-2">Call Related to Product:</span>
                </span>
                <span>{call?.Call_associated_with_Product || "N/A"}</span>
              </p>

              <p className="flex items-center justify-between px-1 py-2">
                <span className="flex items-center">
                  {getSymbol(call?.Agent_Introduction)} 
                  <span className="ml-2">Agent Introduction:</span>
                </span>
                <span>{call?.Agent_Introduction || "N/A"}</span>
              </p>
              <p className="flex items-center justify-between px-1 py-2">
                <span className="flex items-center">
                  {getSymbol(call?.Follow_Up_Required)} 
                  <span className="ml-2">Follow Up Required:</span>
                </span>
                <span>{call?.Follow_Up_Required || "N/A"}</span>
              </p>
            </div>
          </div>
        ) : (
          <p className="text-red-500">No call data available.</p>
        )}
      </div>
    </div>
  );
};

export default AgentInfo;
