
import React from "react";
// import Sidebar from "./Dashboard/Sidebar";

const Dashboard2 = ({ children }) => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="bg-white w-80 h-screen fixed">
        {/* <Sidebar /> */}
      </div>

      {/* Main Content */}
      <main className="flex-1 ml-80" style={{ backgroundColor: "#F5F6FA" }}>
          Hiandmnma  
      </main>
    </div>
  );
};

export default Dashboard2;
