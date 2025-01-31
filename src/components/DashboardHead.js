import React from 'react';
import { IoSearch, IoLogOutOutline, IoNotificationsOutline, IoChevronDownSharp } from "react-icons/io5";


const DashboardHead = () => {
    return (
        <div className="w-full h-16 bg-white px-4 flex items-center justify-between border-b border-gray-200">
                
          <div className="flex items-center bg-[#FFFFFF] rounded-lg px-3 py-2 w-full h-3/5  max-w-md border border-[#D5D5D5] hover:border-black"> 
              <IoSearch className="text-gray-400 mr-3 size-7" />
              <input
              type="text"
              placeholder="Search"
              className="bg-transparent outline-none w-full text-[#202224]"
              />
          </div>
  
          
          <div className=" flex items-center gap-4">
  
              <button className="">
              <IoNotificationsOutline className="text-gray-800 text-xl hover:text-violet-800" />
              </button>
            
              <button className="">
              <IoLogOutOutline className="text-gray-800 text-xl hover:text-violet-800" />
              </button>
  
              <div className="flex flex-row items-center gap-1">
              <img
                  src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-55958-614810.jpg&fm=jpg" 
                  alt="Profile"
                  className="w-10 h-10 rounded-full border border-gray-300 content-center"
              />
              <span className="hidden text-sm md:inline-block text-gray-800 font-medium hover:text-violet-800">
                  Shariq
              </span>
              <IoChevronDownSharp/>
              </div>
  
          </div>
        </div>

    );
};

export default DashboardHead;