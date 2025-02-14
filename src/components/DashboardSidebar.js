import React from "react";
import { useNavigate } from "react-router-dom";
import "tailwindcss/tailwind.css";


import { PiCalendarStarBold, PiFolders } from "react-icons/pi";
import { MdOutlineAnalytics } from "react-icons/md";
import { AiFillHome } from 'react-icons/ai';
import { HiOutlineNewspaper, HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { IoBagRemoveOutline, IoPeopleOutline, IoSettingsOutline, IoSearch,} from "react-icons/io5";
import { FaRegFlag } from "react-icons/fa";
import { GoShieldCheck } from "react-icons/go";
import { LuBadgeHelp} from "react-icons/lu";

import LogoDash from "../Image/logo_dash.png";


const DashboardSidebar = () => {
    const navigate = useNavigate();
    return (
      <aside className="w-80 h-screen bg-slate p-4 flex flex-col overflow-y-auto">
        <img src={LogoDash} alt="profile" className="w-32 mb-5 h-11 " />
  
          <div className="hidden lg:flex items-center rounded-md px-3 py-2 w-full max-w-md border border-gray-300 shadow-2xl hover:border-black">
          <IoSearch className="text-gray-500 mr-3 size-5" />
          <input
              type="text"
              placeholder="Search"    
              className="bg-transparent outline-none w-full text-gray-700"
          />
          </div>
        
        <div className="flex text-gray-400 mb-2 mt-6 text-sm font-semibold ">General</div>  
        <ul className="pl-2 text-base">
          <li className="py-1 text-gray-700 hover:text-gray-900 flex items-center cursor-pointer"
              onClick={() => navigate("/dashboard")}>
            <AiFillHome className="mr-2 size-5" />
            <p>Dashboard</p>
          </li>
          <li className="py-1 text-gray-700 hover:text-gray-900 flex items-center">
            <PiCalendarStarBold className="mr-2  size-5" />
            <p>Leads</p>
          </li>
          <li className="py-1 text-gray-700 hover:text-gray-900 flex items-center"
            onClick={() => navigate("/add_product")}>
            
            <MdOutlineAnalytics    className="mr-2 size-5" />
            <p>Add Product</p>
          </li>
          <li className="py-1 text-gray-700 hover:text-gray-900 flex items-center">
            <HiOutlineNewspaper className="mr-2 size-5" />
            <p>News</p>
          </li>
          <li className="py-1 text-gray-700 hover:text-gray-900 flex items-center">
            <IoBagRemoveOutline className="mr-2 size-5" />
            <p>Recruitment</p>
          </li>
          <li className="py-2 text-gray-700 hover:text-gray-900 flex items-center">
            <PiFolders  className="mr-2 size-5" />
            <p>Projects</p> 
          </li>
        </ul>
        <hr className="border-gray-300 my-3"/>
  
  
        <div className="flex text-gray-400 mb-2 text-sm font-semibold ">MySpace</div>  
        <ul className="pl-2 text-base">
          <li className="py-1 text-gray-700 hover:text-gray-900 flex items-center">
            <FaRegFlag className="mr-2 size-5" />
            <p>Activity</p>
          </li>
          <li className="py-1 text-gray-700 hover:text-gray-900 flex items-center">
            <IoPeopleOutline className="mr-2  size-5" />
            <p>Shared</p>
          </li>
          <li className="py-1 text-gray-700 hover:text-gray-900 flex items-center">
            <GoShieldCheck className="mr-2 size-5" />
            <p>Privary</p>
          </li>
        </ul>
        <hr className="border-gray-300 my-3"/>
  
        <div className="flex text-gray-400 mb-2 text-sm font-semibold ">Support</div>  
        <ul className="pl-2 text-base">
          <li className="py-1 text-gray-700 hover:text-gray-900 flex items-center">
            <IoSettingsOutline className="mr-2 size-5" />
            <p>Setting</p>
          </li>
          <li className="py-1 text-gray-700 hover:text-gray-900 flex items-center">
            <LuBadgeHelp className="mr-2  size-5" />
            <p>Help!</p>
          </li>
          <li className="py-1 text-gray-700 hover:text-gray-900 flex items-center">
            <HiOutlineChatBubbleLeftRight className="mr-2 size-5" />
            <p>Chat</p>
          </li>
        </ul>
        <hr className="border-gray-300 my-3"/>
      </aside>
    );
  };


export default DashboardSidebar;