import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';


import Sidebar from './Sidebar';


import { IoSearch, IoLogOutOutline, IoNotificationsOutline } from "react-icons/io5";



const ViewIDGraph = () => {

    const location = useLocation(); 
    const data = location.state;
    console.log(data);
    const navigate = useNavigate();

  

    return (
      <div className="flex font-inter">
      <div className="bg-white w-80 h-screen fixed ">
      <Sidebar />
      </div>
      
      <main className="flex-1 ml-80" style={{ backgroundColor: "#F5F6FA" }}>

        <div className="w-full h-16 bg-white px-4 flex items-center justify-between border-b border-gray-200">
        
        <div className="flex items-center bg-gray-100 rounded-full px-3 py-2 w-full h-3/5  max-w-md border border-gray-300"> 
            <IoSearch className="text-gray-800 mr-3 size-7" />
            <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none w-full text-gray-700"
            />
        </div>

        
        <div className=" flex items-center gap-4">

            <button className="">
            <IoNotificationsOutline className="text-gray-800 text-xl hover:text-violet-800" />
            </button>
         
            <button className="">
            <IoLogOutOutline className="text-gray-800 text-xl hover:text-violet-800" />
            </button>

            <div className="flex items-center gap-1">
            <img
                src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-55958-614810.jpg&fm=jpg" 
                alt="Profile"
                className="w-10 h-10 rounded-full border border-gray-300 content-center"
            />
            <span className="hidden text-sm md:inline-block text-gray-800 font-medium hover:text-violet-800">
                Shariq
            </span>
            </div>

        </div>
        </div>


        <div className="flex-1 bg-gray-100 p-6 mt-4">
        <h1 className="text-3xl font-bold">Welcome, Shariq Shaikh</h1>
        <p className="text-base    text-gray-700 font-semibold">View progress and insights</p>
        {/* <DashboardSummary  />
        <div className="flex flex-col lg:flex-row gap-6 mt-6  ">
            <CallSummary data={excelData}/>
            <CalendarSection />
        </div>
        <ProductRecommendations /> */}
        </div>
      </main>
    </div>
    );
};

export default ViewIDGraph;