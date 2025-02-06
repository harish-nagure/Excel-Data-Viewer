import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarController, BarElement, Title, Tooltip, Legend } from 'chart.js';



Chart.register(CategoryScale, LinearScale, BarController, BarElement, Title, Tooltip, Legend);

const DataGraphCallScore = ({ data }) => {

  
//   console.log(data);

  const callScoresLabel = [
    "Compassion",
    "Lucidity",
    "Attentiveness",
    "Expertise",
    "Ingenuity",
  ];
  const callScores = [
    "Empathy & Respect",
    "Clarity and Transparency",
    "Active Listening & Focus",
    "Product/Service Knowledge",
    "Problem-Solving Skills",
  ];

  const chartData = {
      
      labels: callScoresLabel,

      datasets: callScores.map((scoreName) => {
        const scoreData = data['Call_scores'].find((score) => score.name === scoreName);
        
        // console.log(scoreData);

        return {
          label: scoreName,
          
          data: [scoreData ? scoreData.score : 0], 

          backgroundColor: (context) => {
            const gradient = context.chart.ctx.createLinearGradient(0, 0, 0, 300);
            gradient.addColorStop(1, 'rgba(128, 90, 213, 1)');
            gradient.addColorStop(0, 'rgba(128, 90, 213, 0.3)');
            return gradient;
          },

          borderRadius: 10,
        };
      }),
    };


  const options = {
    responsive: true,
    maintainAspectRatio: false,  
    plugins: {
    
      datalabels: {
        color: '#00000',
        anchor: 'end',
        align: 'end',
        formatter: (value) => value.toFixed(1),
      },


      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            const score = tooltipItem.raw;
            return `${tooltipItem.dataset.label}: ${score}`;
          },
        },
      },
      legend: {
        display:false,
      },
    },


    scales: {
      x: {
        type: 'category',  
        title: {
          display: true,
          text: 'Call ID',  
          font: {
            size: 14,
            family: 'Arial, sans-serif',
          },
        },
        grid: {
          display: false,  
        },
      },

      y: {
        type: 'linear',  
        min: 0,
        max: 5,          
        title: {
          display: true,
          text: 'Score',  
          font: {
            size: 14,
            family: 'Arial, sans-serif',
          },
        },
        ticks: {
          stepSize: 1,  
        },
        grid: {
          display: true,  
        },
      },
    },
  };

  return (



    <div>
    
    
    
    // const CallSummary = ({ data }) => {
    //   const navigate = useNavigate();
    
    //   const callData = data?.excelData || [];
    //   console.log(data);
    
    //   const handleClick = (call) => {
    //     console.log("Call Data:", call);
    //     navigate('/viewIDdetails', { state: call });
    //   };
    
    //   if (!Array.isArray(callData) || callData.length === 0) {
    //     return <p className="text-gray-500">Loading call summary...</p>;
    //   }
    
    //   return (
    //     <div className="lg:flex-1 bg-white p-6 rounded-lg shadow">
    //       <h2 className="text-lg font-bold mb-4">Call Summary</h2>
    
    //       {/* Added scroll container to make table horizontally scrollable */}
    //       <div className="max-w-72 overflow-x-auto">
    //         <table className="w-full text-sm text-left">
    //           <thead>
    //             <tr className="border-b">
    //               <th className="py-2 px-2">Call ID</th>
    //               <th className="py-2 px-2">Name</th>
    //               <th className="py-2 px-2">Number</th>
    //               <th className="py-2 px-2">Date</th>
    //               <th className="py-2 px-2">Time</th>
    //               <th className="py-2 px-2">Overall Score</th>
    //             </tr>
    //           </thead>
    //           <tbody>
    //             {callData.map((call, index) => (
    //               <tr
    //                 key={index}
    //                 className="hover:bg-gray-100 z-10 rounded-3xl cursor-pointer"
    //                 onClick={() => handleClick(call)}
    //               >
    //                 <td className="py-2 px-2 rounded-l-2xl">{call.Call_ID}</td>
    //                 <td className="py-2 px-2">{call.Name}</td>
    //                 <td className="py-2 px-2">+91 455625464</td>
    //                 <td className="py-2 px-2">
    //                   {new Intl.DateTimeFormat('en-US', {
    //                     month: 'long',
    //                     day: 'numeric',
    //                     year: 'numeric',
    //                   }).format(new Date(call.Date))}
    //                 </td>
    //                 <td className="py-2 px-2">{call.Time}</td>
    
    //                 <td className="py-2 px-0 w-1 rounded-r-2xl">
    //                   <div className="max-w-[70px] max-h-[200px] flex flex-col justify-center items-center">
    //                     <DashboardOverAllGraph data={call} />
    //                   </div>
    //                 </td>
    //               </tr>
    //             ))}
    //           </tbody>
    //         </table>
    //       </div>
    //     </div>
    //   );
    // };
    
    
    
// const Dashboard = (excelData) => {
  
//     return (

      
//       <div className="flex font-inter">
//         <div className="bg-white h-screen fixed ">
//         <DashboardSidebar />
//         </div>
        
//         <main className="flex-1 ml-80" style={{ backgroundColor: "#F5F6FA" }}>
//           <DashboardHead/>
          
//           <div className="flex-1 bg-gray-100 p-6 mt-4">
//           <h1 className="text-3xl font-bold">Welcome, <span className="text-[#8204FF]">Shariq Shaikh</span></h1>
//           <p className="text-base text-gray-700 font-semibold">View progress and insights</p>
//           <DashboardSummary  />
//           <div className="flex flex-col lg:flex-row gap-6 mt-6  ">
//               <CallSummary data={excelData}/>
//               <CalendarSection />
//           </div>
//           <ProductRecommendations />
//           </div>
//         </main>
//       </div>
//     );
//   };

// const Dashboard = (excelData) => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   return (
//     <div className="flex font-inter">
//       <div className="bg-white h-screen hidden lg:block">
//         <DashboardSidebar />
//       </div>

//       <MobileSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

//       <main className="flex-1 lg:ml-80" style={{ backgroundColor: "#F5F6FA" }}>
//         <DashboardHead />
//         <div className="flex items-center justify-between p-6 lg:hidden">
//           <h1 className="text-2xl font-bold">Welcome, <span className="text-[#8204FF]">Shariq Shaikh</span></h1>
//           <TiThMenu onClick={() => setSidebarOpen(!sidebarOpen)} className="text-2xl cursor-pointer" />
//         </div>

//         <div className="flex-1 bg-gray-100 p-6 mt-4">
//           <p className="text-base text-gray-700 font-semibold">View progress and insights</p>
//           <DashboardSummary />
//           <div className="flex flex-col lg:flex-row gap-6 mt-6">
//             {/* Assuming CallSummary is defined and integrated */}
//             <CalendarSection />
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };
  




// const DashboardSummary = () => {
//   return (
//     <div className="grid lg:grid-cols-3 md:grid-flow-row w-full gap-6 mt-6 ">

//       <div className="bg-white lg:p-6 md:p-10 rounded-lg shadow">

//         <div className="mb-3 w-fit rounded-full lg:p-3 md:p-5" style={{background:"#D398E7"}}>
//             <IoBarChartOutline className=" text-slate-50 lg:text-2xl md:text-5xl"/>
//         </div>
//         <h3 className="lg:text-sm md:text-2xl text-gray-600">Daily Call Accomplished</h3>
//         <p className="lg:text-3xl md:text-5xl font-bold my-1">$53,00989</p>

//       </div>

//       <div className="bg-white p-6 rounded-lg shadow">
//         <div className="mb-3 w-fit rounded-full p-3" style={{background:"#E89271"}}>
//             <IoBagCheck className=" text-slate-50 text-2xl"/></div>
//         <h3 className="text-sm text-gray-600">Customer Transactions Completed</h3>
//         <p className="text-3xl font-bold my-1">95 <span className="text-lg">/ 100</span></p>
//       </div>

//       <div className="bg-white p-6 rounded-lg shadow">
//         <div className="mb-3 w-fit rounded-full p-3" style={{background:"#70A1E5"}}>
//             <LuClock className=" text-slate-50 text-2xl"/></div> 
//         <h3 className="text-sm text-gray-600">Customer Service FAQs</h3>
//         <p className="text-3xl font-bold my-1">1022 <span className="text-lg">/ 1300 Hrs</span></p>
//       </div>
//     </div>
//   );
// };

// const CallSummary = ({ data }) => {

//   const navigate  = useNavigate();

//   const callData = data?.excelData || [];
  
//   console.log(data);

//   const handleClick = (call) => {
//     console.log("Call Data:", call);
//     navigate('/viewIDdetails', { state: call });
//   };

//   if (!Array.isArray(callData) || callData.length === 0) {
//     return <p className="text-gray-500">Loading call summary...</p>;
//   }

//   // console.log("Call Data:", callData);

//   return (
//     <div className="lg:flex-1 bg-white p-6 rounded-lg shadow">
//     <h2 className="text-lg font-bold mb-4">Call Summary</h2>
//     <div className="overflow-x-auto lg:max-w-full md:min-w-[1000px]">
//       <table className="lg:text-sm md:text-xl text-left">
//         <thead>
//           <tr className="border-b">
//             <th className="py-2 px-2">Call ID</th>
//             <th className="py-2 px-2">Name</th>
//             <th className="py-2 px-2">Number</th>
//             <th className="py-2 px-2">Date</th>
//             <th className="py-2 px-2">Time</th>
//             <th className="py-2 px-2">Overall Score</th>
//           </tr>
//         </thead>
//         <tbody>
//           {callData.map((call, index) => (
//             <tr key={index} 
//               className="hover:bg-gray-100 z-10 rounded-3xl cursor-pointer" 
//               onClick={() => handleClick(call)} >  
  
//               <td className="py-2 px-2 rounded-l-2xl">{call.Call_ID}</td>
//               <td className="py-2 px-2">{call.Name}</td>
//               <td className="py-2 px-2">+91 455625464</td>
//               <td className="py-2 px-2">{new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric' }).format(new Date(call.Date))}</td>
//               <td className="py-2 px-2">{call.Time}</td>
  
//               <td className="py-2 px-0 w-1 rounded-r-2xl">
//                 <div className="max-w-[70px] max-h-[200px] flex flex-col justify-center items-center">
//                   <DashboardOverAllGraph data={call} />
//                 </div>
//               </td>
  
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   </div>
  
//   );
// };
// const ProductRecommendations = () => {
//   const products = [
//     {
//       name: "Apple Watch",
//       image: ProductImg,
//       location: "6096 Marjolaine Landing",
//       date: "12.02.2025",
//       time: "12:53 PM",
//       status: "Delivered",
//     },
//     {
//       name: "Apple Watch",
//       image: ProductImg,
//       location: "6096 Marjolaine Landing",
//       date: "12.09.2019",
//       time: "12:53 PM",
//       status: "Pending",
//     },
//     {
//       name: "Apple Watch",
//       image: ProductImg,
//       location: "6096 Marjolaine Landing",
//       date: "12.09.2019",
//       time: "12:53 PM",
//       status: "Rejected",
//     },
//   ];

//  return (
//   <div className="bg-white p-6 rounded-lg shadow mt-6">
//     <h2 className="text-lg font-bold">Product Recommendations</h2>
//     <table className="w-full mt-4 text-sm text-left">
//       <thead className="bg-slate-100 rounded-lg">
//         <tr>
//           <th className="py-4 px-4 rounded-l-lg">Product Name</th>
//           <th className="py-4 px-4">Location</th>
//           <th className="py-4 px-4">Date - Time</th>
//           <th className="py-4 px-4">Piece</th>
//           <th className="py-4 px-4">Amount</th>
//           <th className="py-4 px-4 rounded-r-lg">Status</th>
//         </tr>
//       </thead>

//       <tbody>
//         {products.map((product, index) => (
//           <tr key={index} className="hover:bg-gray-100 border-b">
//             <td className="py-4 flex items-center flex-row justify-evenly">
//               <div className="w-9 h-8"><img src={product.image} alt="Product"/></div>{product.name}</td>
//             <td className="py-2 px-4">{product.location}</td>
//             <td className="py-2 px-4">
//               {product.date} - {product.time}
//             </td>
//             <td className="py-2 px-4">{product.piece}</td>
//             <td className="py-2 px-4">{product.amount}</td>
//             <td className="py-2 px-4">
//               <span
//                 className={`px-3 py-1 rounded-full text-white ${
//                   product.status === "Delivered"
//                     ? "bg-green-500"
//                     : product.status === "Pending"
//                     ? "bg-yellow-500"
//                     : "bg-red-500"
//                 }`}
//               >
//                 {product.status}
//               </span>
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   </div>
// );

// };
// const Dashboard = (excelData) => {
  
//     return (

      
//       <div className="flex font-inter">
//         <div className="bg-white h-screen fixed ">
//         <DashboardSidebar />
//         </div>
        
//         <main className="flex-1 ml-80" style={{ backgroundColor: "#F5F6FA" }}>
//           <DashboardHead/>
          
//           <div className="flex-1 bg-gray-100 p-6 mt-4">
//           <h1 className="text-3xl font-bold">Welcome, <span className="text-[#8204FF]">Shariq Shaikh</span></h1>
//           <p className="text-base text-gray-700 font-semibold">View progress and insights</p>
//           <DashboardSummary  />
//           <div className="flex flex-col lg:flex-row gap-6 mt-6  ">
//               <CallSummary data={excelData}/>
//               <CalendarSection />
//           </div>
//           <ProductRecommendations />
//           </div>
//         </main>
//       </div>
//     );
//   };

// const Dashboard = (excelData) => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   return (
//     <div className="flex font-inter">
//       <div className="bg-white h-screen hidden lg:block">
//         <DashboardSidebar />
//       </div>

//       <MobileSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

//       <main className="flex-1 lg:ml-80" style={{ backgroundColor: "#F5F6FA" }}>
//         <DashboardHead />
//         <div className="flex items-center justify-between p-6 lg:hidden">
//           <h1 className="text-2xl font-bold">Welcome, <span className="text-[#8204FF]">Shariq Shaikh</span></h1>
//           <TiThMenu onClick={() => setSidebarOpen(!sidebarOpen)} className="text-2xl cursor-pointer" />
//         </div>

//         <div className="flex-1 bg-gray-100 p-6 mt-4">
//           <p className="text-base text-gray-700 font-semibold">View progress and insights</p>
//           <DashboardSummary />
//           <div className="flex flex-col lg:flex-row gap-6 mt-6">
//             {/* Assuming CallSummary is defined and integrated */}
//             <CalendarSection />
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };
import React,{ useState } from "react";
import { useNavigate } from "react-router-dom";
import "tailwindcss/tailwind.css";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../Styles/CalendarStyles.css";

import { IoBarChartOutline, IoBagCheck } from "react-icons/io5";
import { LuClock } from "react-icons/lu";


import ProductImg from "../Image/product.png";

import DashboardSidebar from "./DashboardSidebar";


// import DataGraphOverScore from "./DataGraphOverScore";
import DashboardOverAllGraph from "./DashboardOverAllGraph";
import DashboardHead from "./DashboardHead";



const DashboardSummary = () => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-flow-row w-full gap-6 mt-6 ">

      <div className="bg-white lg:p-6 md:p-10 lg:rounded-xl md:rounded-3xl shadow">
        <div className="mb-3 w-fit rounded-full lg:p-3 md:p-5" style={{background:"#D398E7"}}>
          <IoBarChartOutline className=" text-slate-50 lg:text-2xl md:text-5xl"/>
        </div>
        <h3 className="lg:text-sm md:text-2xl text-gray-600">Daily Call Accomplished</h3>
        <p className="lg:text-3xl md:text-5xl font-bold my-1">$53,00989</p>
      </div>

      <div className="bg-white lg:p-6 md:p-10 rounded-lg shadow">
        <div className="mb-3 w-fit rounded-full lg:p-3 md:p-5" style={{background:"#E89271"}}>
          <IoBagCheck className=" text-slate-50 lg:text-2xl md:text-5xl"/>
        </div>
        <h3 className="lg:text-sm md:text-2xl text-gray-600">Customer Transactions Completed</h3>
        <p className="lg:text-3xl md:text-5xl font-bold my-1">95 <span className="text-lg">/ 100</span></p>
      </div>

      <div className="bg-white lg:p-6 md:p-10 rounded-lg shadow">
        <div className="mb-3 w-fit rounded-full lg:p-3 md:p-5" style={{background:"#70A1E5"}}>
          <LuClock className=" text-slate-50 lg:text-2xl md:text-5xl"/>
        </div> 
        <h3 className="lg:text-sm md:text-2xl text-gray-600">Customer Service FAQs</h3>
        <p className="lg:text-3xl md:text-5xl font-bold my-1">1022 <span className="text-lg">/ 1300 Hrs</span></p>
      </div>
    </div>
  );
};

const CalendarSection = () => {
  const [date, setDate] = useState([new Date(), new Date()]);

  return (
    <div className="flex justify-center">
    <div className="flex-1 w-full justify-center items-center lg:max-w-sm md:max-w-fit bg-white p-4 rounded-lg shadow">
      <h2 className="lg:text-lg md:text-2xl font-bold mb-4 ">Calls Overview</h2>
      <div className="flex items-center justify-center lg:p-0">
      <Calendar
        onChange={setDate}
        value={date}
        selectRange={true}
        className="custom-calendar"
      />
      </div>
      <div className="mt-6 text-center lg:text-sm md:text-lg">
        <button 
        className="bg-[#8204FF] text-white font-semibold py-2 px-4 rounded-lg hover:bg-[#8204FF60] hover:text-white">
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
    </div>
  );
};


const CallSummary = ({ data }) => {
  const navigate = useNavigate();
  const callData = data?.excelData || [];

  console.log(data);

  const handleClick = (call) => {
    console.log("Call Data:", call);
    navigate('/viewIDdetails', { state: call });
  };

  if (!Array.isArray(callData) || callData.length === 0) {
    return <p className="text-gray-500">Loading call summary...</p>;
  }

  return (
    <div className="lg:flex-1 bg-white p-4 rounded-lg shadow">
      <h2 className="lg:text-xl font-bold mb-4 md:text-4xl md:p-4 lg:p-2">Call Summary</h2>
      <div className="overflow-x-auto overflow-full">
        <table className="lg:min-w-full md:min-w-[1500px] lg:text-sm md:text-3xl text-left">
          <thead>
            <tr className="border-b">
              <th className="py-2 px-4">Call ID</th>
              <th className="py-2 px-4">Name</th>
              <th className="py-2 px-4">Number</th>
              <th className="py-2 px-4">Date</th>
              <th className="py-2 px-4">Time</th>
              <th className="py-2 px-4">Overall Score</th>
            </tr>
          </thead>
          <tbody>
            {callData.map((call, index) => (
              <tr
                key={index}
                className="hover:bg-gray-100 z-10 rounded-3xl cursor-pointer lg:text-sm md:text-3xl "
                onClick={() => handleClick(call)}
              >
                <td className="py-2 lg:px-4 md:px-4">{call.Call_ID}</td>
                <td className="py-2 lg:px-0 md:px-4 ">{call.Name}</td>
                <td className="py-2 lg:px-4 md:px-2">+91 455625464</td>
                <td className="py-2 px-4">
                  {new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric' }).format(new Date(call.Date))}
                </td>
                <td className="py-2 px-4">{call.Time}</td>
                <td className="py-2 px-0 w-1 rounded-r-2xl">
                  <div className="lg:max-w-[70px] max-h-[200px] md:max-w-[90px] flex flex-col justify-center items-center text-center">
                    <DashboardOverAllGraph data={call} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
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
    <div className="lg:flex-1 bg-white p-4 rounded-xl shadow mt-6">
      <h2 className="lg:text-xl font-bold mb-4 md:text-4xl md:py-6 md:px-3 lg:p-2">Product Recommendations</h2>
      <div className="overflow-x-auto w-full">
        <table className="lg:min-w-full md:min-w-[1500px] lg:text-sm md:text-3xl text-left">
          <thead>
            <tr className="border-b">
              <th className="py-2 px-4">Product Name</th>
              <th className="py-2 px-4">Location</th>
              <th className="py-2 px-4">Date - Time</th>
              <th className="py-2 px-4">Piece</th>
              <th className="py-2 px-4">Amount</th>
              <th className="py-2 px-4">Status</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product, index) => (
              <tr
                key={index}
                className="hover:bg-gray-100 z-10 rounded-3xl border-b cursor-pointer lg:text-sm md:text-3xl"
              >
                <td className="lg:py-4 md:py-16 px-4 flex items-center">
                  <div className="w-9 h-8">
                    <img src={product.image} alt="Product" />
                  </div>
                  <span className="ml-2">{product.name}</span>
                </td>
                <td className="lg:py-6 px-4 md:py-12">{product.location}</td>
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
    </div>
  );
};



const Dashboard = (excelData) => {

  return (
    <div className="lg:flex md:block font-inter ">
      <div className="bg-white h-screen hidden lg:block fixed z-20 ">
        <DashboardSidebar/>
      </div>

      <main className="flex-1 lg:ml-80" style={{ backgroundColor: "#F5F6FA" }}>
        
        <DashboardHead />

        <div className="flex-1 bg-gray-100 lg:p-6 md:p-16 mt-4 w-full">
          <h1 className="lg:text-3xl md:text-6xl lg:p-0 md:px-4 font-bold">Welcome, <span className="text-[#8204FF]">Shariq Shaikh</span></h1>
          <p className="lg:text-base md:text-3xl lg:p-0 md:py-5 md:px-5 text-gray-700 font-semibold">View progress and insights</p>
          
          
          <DashboardSummary />

          <div className="flex flex-col lg:flex-row gap-6 mt-6">
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




 // // Close sidebar when clicking outside
    // useEffect(() => {
    //     const handleClickOutside = (event) => {
    //         if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
    //             setSidebarOpen(false);
    //         }
    //     };
    //     document.addEventListener("mousedown", handleClickOutside);
    //     return () => {
    //         document.removeEventListener("mousedown", handleClickOutside);
    //     };
    // }, []);
    
    
    
        <h3 className="mb-2 text-xl font-bold">Call Score</h3>
        <p className="text-sm text-gray-500 mb-5">Get insight about the call</p>

    <div className='w-full h-96 pt-10'> 
      <Bar data={chartData} options={options} />
    </div>
      {/* <div className="mt-6 mx-auto w-full flex justify-center items-center">
        <GaugeComponent
          arc={{
            nbSubArcs: 6,
            colorArray: colorArray,
            width: 0.3,
            padding: 20,
          }}
          labels={{
            valueLabel: {
              style: { fontSize: 32 },
              formatTextValue: getInterestLabel,
            },
            tickLabels: {
              type: "outer",
              ticks: [
                { value: 0 },
                { value: 20 },
                { value: 40 },
                { value: 60 },
                { value: 80 },
                { value: 100 },
              ],
              defaultTickValueConfig: {
                formatTextValue: getInterestLabel
              }
            },
          }}
          value={normalizedPercentage}
          maxValue={100}
        />
      </div> */}

    </div>

    
    
    
  );
};

export default DataGraphCallScore;
  // tickLabels: {
            //   hide:true,
            //   type: 'outer',
            //   defaultTickValueConfig: {
            //     formatTextValue: (tickVal) => getInterestLabel(tickVal),
            //     style: { fontSize: 10, fill: "#9B9B9B" },
            //   },
              
            //   defaultTickLineConfig: {
            //     distanceFromArc: 0.55,
            //   },
              
            // }