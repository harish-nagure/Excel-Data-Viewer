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