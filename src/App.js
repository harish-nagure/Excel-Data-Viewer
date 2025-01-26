import React,{useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import ViewIDGraph from "./components/ViewIDGraph";
import Dashboard from "./components/Dashboard";
import LocalExcelReader from "./components/LocalExcelReader";
import Dashboard2 from "./components/Dashboard2";


  
const App = () => {
  const [excelData, setExcelData] = useState([]);
  return (
    <Router>
    
      <LocalExcelReader filePath="./Sample_Data.xlsx" onDataLoaded={setExcelData} />
 

    {excelData.length > 0 ? (
      <Routes>
        <Route path="/" element={<Home excelData={excelData} />} />
        <Route path="/ViewIDGraph" element={<ViewIDGraph excelData={excelData} />} />
        <Route path="/db2" element={<Dashboard2 excelData={excelData} />} />
        <Route path="/db" element={<Dashboard excelData={excelData} />} />
      </Routes>
    ) : (
      <p>Loading Excel Data...</p>
    )}
  </Router>

   

  );
};

export default App;


 // <div className="min-h-screen bg-gradient-to-r from-green-100 via-green-10 to-green-100 p-6">
    //   <h1 className="text-center text-secondary text-4xl font-extrabold mb-10">
    //     Excel Data Viewer for Nousteam
    //   </h1>
    //   <div className="max-w-7xl mx-auto bg-white p-8 border border-black shadow-lg rounded-3xl">

    //     <LocalExcelReader filePath="./Sample_Data.xlsx" onDataLoaded={setExcelData} />
    //     {excelData.length > 0 && (
    //       <div className="mt-10">
    //         <h2 className="text-secondary text-2xl font-bold mb-6 border-b-2 border-primary pb-2">
    //           Data Table
    //         </h2>
    //         <DataTable data={excelData} />


    //         {/* <div className="mt-10">
    //           <h2 className="text-secondary text-2xl font-bold mb-6 border-b-2 border-primary pb-2">
    //             Graphs
    //           </h2>
    //           <div className="flex flex-col lg:flex-row gap-8">
    //           <div className="bg-gray-100 rounded-lg shadow-lg p-6 flex-1 border border-gray-300 hover:shadow-2xl hover:bg-white  transition-shadow duration-300">
    //               <DataGraphCallScore data={excelData} />
    //             </div>
    //             <div className="bg-gray-100 rounded-lg shadow-lg p-6 flex-1 border border-gray-300 hover:shadow-2xl hover:bg-white  transition-shadow duration-300">
    //               <DataGraphOverScore data={excelData} />
    //             </div>
    //           </div>
    //         </div>
    //         <div className="mt-10">
    //           <h2 className="text-secondary text-2xl font-bold mb-6 border-b-2 border-primary pb-2">
    //             Gauge Chart for Interest Level
    //           </h2>
    //           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    //             {excelData.map((call) => (
    //               <div
    //                 key={call["Call_ID"]}

    //                 className="bg-gray-100 border border-gray-300 rounded-lg shadow-md p-6 flex flex-col items-center hover:bg-white hover:shadow-2xl"
                   
    //                 >
    //                 <InterestLevelGauge callData={call} />
    //                 <p className="text-secondary font-medium mt-4">Call ID: <strong>{call["Call_ID"]}</strong></p>
    //               </div>
    //             ))}
    //           </div>
    //         </div> */}



    //       </div>
    //     )}
    //   </div>
    // </div>