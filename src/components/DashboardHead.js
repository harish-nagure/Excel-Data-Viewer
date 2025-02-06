<<<<<<< HEAD
import React, { useState } from 'react';
=======
import React, { useState, useRef } from 'react';
>>>>>>> a1255a5 (Mobile view 2)
import { IoSearch, IoLogOutOutline, IoNotificationsOutline, IoChevronDownSharp } from "react-icons/io5";
import { TiThMenu,TiArrowBack } from "react-icons/ti";
import DashboardSidebar from './DashboardSidebar';

const DashboardHead = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    

   

   

    
    return (
        <div>
            {/* Sidebar for Mobile*/}
            <div 
                // ref={sidebarRef} 
                className={`bg-white lg:hidden h-screen fixed z-20 transition-transform duration-300 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
            >
                <DashboardSidebar />
                <TiArrowBack 
                    onClick={() => setSidebarOpen(false)} 
                    className="lg:hidden absolute top-6 right-6 text-4xl text-gray-600 hover:text-violet-800"
                />    
            </div>

            {/* Header */}
            <div className="w-auto lg:h-16 md:h-24 bg-white lg:px-4 md:px-16 flex items-center justify-between border-b border-gray-200">

                {/* Mobile Sidebar Toggle */}
                <div className="flex items-center justify-between lg:hidden">
                    <TiThMenu onClick={() => setSidebarOpen(!sidebarOpen)} className="text-5xl cursor-pointer" />
                </div>

                {/* Search Bar */}
                <div className="flex items-center bg-[#FFFFFF] rounded-lg px-3 py-2 w-full h-3/5 max-w-md border border-[#D5D5D5] hover:border-black"> 
                    <IoSearch className="text-gray-400 mr-3 size-7" />
                    <input
                        type="text"
                        placeholder="Search"
                        className="bg-transparent outline-none w-full text-[#202224]"
                    />
                </div>

                {/* Icons and Profile */}
                <div className="flex items-center gap-4">
                    <button>
                        <IoNotificationsOutline className="text-gray-800 lg:text-xl md:text-3xl hover:text-violet-800" />
                    </button>
                    
                    <button>
                    <IoLogOutOutline className="text-gray-800 text-xl hover:text-violet-800 lg:block md:hidden" />
                    </button>

                    <div className="flex flex-row items-center gap-1">
                        <img
                            src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-55958-614810.jpg&fm=jpg" 
                            alt="Profile"
                            className="lg:w-10 lg:h-10 md:w-14 md:h-14 rounded-full border border-gray-300 content-center"
                        />
                        <span className="text-sm lg:inline-block md:hidden text-gray-800 font-medium hover:text-violet-800">
                            Shariq
                        </span>
                        <IoChevronDownSharp />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardHead;
