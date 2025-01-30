import React,{ useState } from "react";
import { useNavigate } from "react-router-dom";
import "tailwindcss/tailwind.css";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../Styles/CalendarStyles.css";

import { IoSearch, IoLogOutOutline, IoNotificationsOutline, IoBarChartOutline, IoBagCheck } from "react-icons/io5";
import { LuClock } from "react-icons/lu";



import ProductImg from "../Image/product.png";

import Sidebar from "./Sidebar";


// import DataGraphOverScore from "./DataGraphOverScore";
import OverAllScoreGraph from "./OverAllScoreGraph";





const DashboardSummary = () => {
  return (
    <div className="grid grid-cols-3 gap-6 mt-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="mb-3 w-fit rounded-full p-3" style={{background:"#D398E7"}}>
            <IoBarChartOutline className=" text-slate-50 text-2xl"/></div>
        <h3 className="text-sm text-gray-600">Daily Call Accomplished</h3>
        <p className="text-3xl font-bold my-1">$53,00989</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <div className="mb-3 w-fit rounded-full p-3" style={{background:"#E89271"}}>
            <IoBagCheck className=" text-slate-50 text-2xl"/></div>
        <h3 className="text-sm text-gray-600">Customer Transactions Completed</h3>
        <p className="text-3xl font-bold my-1">95 <span className="text-lg">/ 100</span></p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <div className="mb-3 w-fit rounded-full p-3" style={{background:"#70A1E5"}}>
            <LuClock className=" text-slate-50 text-2xl"/></div> 
        <h3 className="text-sm text-gray-600">Customer Service FAQs</h3>
        <p className="text-3xl font-bold my-1">1022 <span className="text-lg">/ 1300 Hrs</span></p>
      </div>
    </div>
  );
};

const CalendarSection = () => {
  const [date, setDate] = useState([new Date(), new Date()]);

  return (
    <div className="flex-1 w-full justify-center items-center lg:max-w-sm md:max-w-fit  bg-white p-4 rounded-lg shadow">
      <h2 className="text-lg font-bold mb-4">Calls Overview</h2>
      <div className="flex items-center justify-center">
      <Calendar
        onChange={setDate}
        value={date}
        selectRange={true}
        className="custom-calendar text-center"
      />
      </div>
      <div className="mt-6 text-center">
        <button 
        className="bg-[#219653] text-white font-semibold py-2 px-4 rounded-lg hover:bg-[#1e874b] hover:text-white">
          Show call list {""}
          <span className="text-white ">
            (
              {date[0].toLocaleDateString('en-IN', { day: '2-digit', month: 'short' })} -{" "}
              {date[1].toLocaleDateString('en-IN', { day: '2-digit', month: 'short' })}
            )
          </span>
        </button>
      </div>

    </div>
    
  );
};

const CallSummary = ({ data }) => {

  const navigate  = useNavigate();

  const callData = data?.excelData || [];

  const handleClick = (call) => {
    console.log("Call Data:", call);
    navigate('/ViewIDGraph', { state: call });
  };

  if (!Array.isArray(callData) || callData.length === 0) {
    return <p className="text-gray-500">Loading call summary...</p>;
  }

  // console.log("Call Data:", callData);

  return (
    <div className="flex-1 bg-white p-6 rounded-lg shadow ">
      <h2 className="text-lg font-bold mb-4">Call Summary</h2>
      <table className="w-full text-sm text-left ">
        <thead>
          <tr className="border-b">
            <th className="py-2 px-2">Call ID</th>
            <th className="py-2 px-2">Name</th>
            <th className="py-2 px-2">Number</th>
            <th className="py-2 px-2">Date</th>
            <th className="py-2 px-2">Time</th>
            <th className="py-2 px-2">Overall Score</th>
          </tr>
        </thead>
        <tbody>
          {callData.map((call, index) => (
            <tr key={index} 
              className=" hover:bg-gray-100 z-10 rounded-3xl" 
              onClick={() => handleClick(call)} >  

              <td className="py-2 px-2 rounded-l-2xl">{call.Call_ID}</td>
              <td className="py-2 px-2">{call.Name}</td>
              <td className="py-2 px-2">+91 455625464</td>
              <td className="py-2 px-2">{new Intl.DateTimeFormat('en-US', { month: 'long',day: 'numeric',year: 'numeric',}).format(new Date(call.Date))}</td>
              <td className="py-2 px-2">{call.Time}</td>
              

              <td className="py-2 px-0 w-1 rounded-r-2xl">
                <div className="max-w-[70px] max-h-[200px] flex flex-col justify-center items-center">
                  <OverAllScoreGraph data={call} />
                  
                </div>
              </td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const ProductRecommendations = () => {
  const products = [
    {
      name: "Apple Watch",
      image: ProductImg,
      location: "6096 Marjolaine Landing",
      date: "12.02.2025",
      time: "12:53 PM",
      status: "Delivered",
    },
    {
      name: "Apple Watch",
      image: ProductImg,
      location: "6096 Marjolaine Landing",
      date: "12.09.2019",
      time: "12:53 PM",
      status: "Pending",
    },
    {
      name: "Apple Watch",
      image: ProductImg,
      location: "6096 Marjolaine Landing",
      date: "12.09.2019",
      time: "12:53 PM",
      status: "Rejected",
    },
  ];

 return (
  <div className="bg-white p-6 rounded-lg shadow mt-6">
    <h2 className="text-lg font-bold">Product Recommendations</h2>
    <table className="w-full mt-4 text-sm text-left">
      <thead className="bg-slate-100 rounded-lg">
        <tr>
          <th className="py-4 px-4 rounded-l-lg">Product Name</th>
          <th className="py-4 px-4">Location</th>
          <th className="py-4 px-4">Date - Time</th>
          <th className="py-4 px-4">Piece</th>
          <th className="py-4 px-4">Amount</th>
          <th className="py-4 px-4 rounded-r-lg">Status</th>
        </tr>
      </thead>

      <tbody>
        {products.map((product, index) => (
          <tr key={index} className="hover:bg-gray-100 border-b">
            <td className="py-4 flex items-center flex-row justify-evenly">
              <div className="w-9 h-8"><img src={product.image} alt="Product"/></div>{product.name}</td>
            <td className="py-2 px-4">{product.location}</td>
            <td className="py-2 px-4">
              {product.date} - {product.time}
            </td>
            <td className="py-2 px-4">{product.piece}</td>
            <td className="py-2 px-4">{product.amount}</td>
            <td className="py-2 px-4">
              <span
                className={`px-3 py-1 rounded-full text-white ${
                  product.status === "Delivered"
                    ? "bg-green-500"
                    : product.status === "Pending"
                    ? "bg-yellow-500"
                    : "bg-red-500"
                }`}
              >
                {product.status}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

};

const Dashboard = (excelData) => {
 
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
        <DashboardSummary  />
        <div className="flex flex-col lg:flex-row gap-6 mt-6  ">
            <CallSummary data={excelData}/>
            <CalendarSection />
        </div>
        <ProductRecommendations />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
