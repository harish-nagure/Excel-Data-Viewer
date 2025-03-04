import React from "react";
import DashboardSidebar from "./DashboardSidebar";
import DashboardHead from "./DashboardHead";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';


import { Line } from 'react-chartjs-2';




// import Highcharts from "highcharts";
// import HighchartsReact from "highcharts-react-official";


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


const MultiLineChartOfAgents = ({ data }) => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: "index",
      intersect: false,
    },
    plugins: {
      legend: {
        // display: true,
        display:false,
        position: "bottom", 
        align: "start",
        labels: {
          usePointStyle: true,
          padding: 22,  
          
          
          font: {
            size: 13, 
            family: "Inter, sans-serif",
            color: "#000000",
          },
        },
      },
      title: {
        display: false,
      },
      
    },
    scales: {
      x: {
        grid: {
          display: true,
          color: "#E5E7EB",
        },
        ticks: {
          font: {
            size: 14,
            color: "#000000",
          }, 
          
          maxRotation: 0,
          minRotation: 0,
          autoSkip: false, 

          align: "center", 
         
        },
        offset: true,
      },
      y: {
        grid: {
          display: true,
          color: "#E5E7EB",
        },
        ticks: {
          font: {
            size: 14,
          },
          stepSize: 1,
          precision: 0,
        },
      },
    },
  };

  const labels = data.map((item) => item?.Call_ID ? item.Call_ID : "Unknown");

  const ChartData = {
    labels,
    datasets: [
      {
        label: "Agent 1",
        data: data.map((item) => item?.Agent01 ? item.Agent01 : 0 ),
        borderColor: "#7086FD",
        backgroundColor: "#7086FD",
        pointBackgroundColor: "#7086FD",
        pointBorderColor: "#7086FD90",
        pointRadius: 5,
        pointBorderWidth: 10,
        pointHoverRadius: 5,
        pointHoverBorderWidth: 10,
        pointHoverBackgroundColor: "#7086FD",
        pointHoverBorderColor: "#7086FD90",
        tension: 0.3,
      },

      {
        label: "Agent 2",
        data: data.map((item) => item?.Agent02 ? item.Agent02 : 0 ),
        borderColor: "#6FD195",
        backgroundColor: "#6FD195",
        pointBackgroundColor: "#6FD195",
        pointBorderColor: "#6FD19590",
        pointRadius: 5,
        pointBorderWidth: 10,
        pointHoverRadius: 5,
        pointHoverBorderWidth: 10,
        pointHoverBackgroundColor: "#6FD195",
        pointHoverBorderColor: "#6FD19590",
        tension: 0.3,
      },
      {
        label: "Agent 3",
        data: data.map((item) => item?.Agent03 ? item.Agent03 : 0 ),
        borderColor: "#FFAE4C",
        backgroundColor: "#FFAE4C",
        pointBackgroundColor: "#FFAE4C",
        pointBorderColor: "#FFAE4C70",
        pointRadius: 5,
        pointBorderWidth: 10,
        pointHoverRadius: 5,
        pointHoverBorderWidth: 10,
        pointHoverBackgroundColor: "#FFAE4C",
        pointHoverBorderColor: "#FFAE4C70",
        tension: 0.3,
      },

      {
        label: "Agent 4",
        data: data.map((item) => item?.Agent04 ? item.Agent04 : 0 ),
        borderColor: "#07DBFA",
        backgroundColor: "#07DBFA",
        pointBackgroundColor: "#07DBFA",
        pointBorderColor: "#07DBFA60",
        pointRadius: 5,
        pointBorderWidth: 10,
        pointHoverRadius: 5,
        pointHoverBorderWidth: 10,
        pointHoverBackgroundColor: "#07DBFA",
        pointHoverBorderColor: "#07DBFA60",
        tension: 0.3,
      },

    ],
  };

  const graphWidth = labels.length*150;

  return (
    <>
      <h3 className="mb-2 text-xl font-bold">Agent Call Scores</h3>
      <p className="text-sm text-gray-500 mb-5">Call score for each agent</p>
      <div className="overflow-x-auto scrollbar-thin h-full overflow-y-hidden">
        
        <div className="h-[220px] lg:max-w-[100000px] "
        style={{ width: `${graphWidth}px` }}>
          <Line options={options} data={ChartData} />
        </div>
      </div>
    </>
  );
};



// const JitterScatterChart = ({ data }) => {

//   const colors = ["#DD5B5D", "#FF7D7F", "#DBED54", "#8FDF7D", "#63B950"];

//   const processAgentData = (agentKey, index) =>
//     data.map((item) => [
//       index + (Math.random() - 0.5) * 0.3, 
//       item?.[agentKey] ?? 0

//       // (item?.[agentKey] ?? 0) + (Math.random() - 0.4) * 0.9 
//     ]);

//   const options = {
//     chart: {
//       type: "scatter",
//       backgroundColor: "#FFFFFF",
//       width: 600, 
//       height: 220, 
//     },
//     title: { text: null },
//     colors,
//     xAxis: {
//       categories: ["Agent 1", "Agent 2", "Agent 3", "Agent 4", "Agent 5"],
//       min: 0, 
//       max: 4, 
//       scrollbar: { enabled: true }, 
//       labels: {
//         formatter: function () {
//           return this.value; 
//         },
//       },
//     },
//     yAxis: {
//       title: { text: "Call Scores" },
//     },
//     legend: {
//       enabled: false,
//     },
    
//     plotOptions: {
//       scatter: {
//         showInLegend: true,
//         marker: { radius: 4, symbol: "circle" }, 
//         tooltip: {
//           pointFormat: "Agent {series.name}, Score: {point.y:.3f}",
//         },
//       },
//     },
//     series: [
//       { name: "Agent 1", data: processAgentData("Agent01", 0) },
//       { name: "Agent 2", data: processAgentData("Agent02", 1) },
//       { name: "Agent 3", data: processAgentData("Agent03", 2) },
//       { name: "Agent 4", data: processAgentData("Agent04", 3) },
//       { name: "Agent 5", data: processAgentData("Agent05", 4) },
//     ],
//   };

//   return (
//     <div>
//       <h3 className="mb-2 text-xl font-bold">Agent Report</h3>
//       <p className="text-sm text-gray-500 mb-5">Call report for each agent</p>

//       {/* 🔹 Scrollable Container */}
//       <div className="overflow-x-auto scrollbar-thin">
//         <div className="w-fit h-fit">  
//           <HighchartsReact highcharts={Highcharts} options={options} />
//         </div>
//       </div>
//     </div>
//   );
// };



const ManagerPortal = ({excelData}) => {
 
  return (
    <div className="flex font-inter min-h-screen">
      <div className="bg-white h-screen hidden lg:block fixed z-20 w-72">
        <DashboardSidebar />
      </div>

      <main className="flex-1 lg:ml-80" style={{ backgroundColor: "#F5F6FA" }}>
        <DashboardHead />

        <div className="bg-gray-100 p-4 md:p-8 mt-4 rounded-lg">

          <h1 className="text-3xl font-bold">
            Manager <span className="text-primary">Dashboard</span>
          </h1>
          <p className="text-base text-gray-700 font-semibold">
          Get deeper insight into agent performance
          </p>

          <div className="grid gap-4 mt-6 md:gap-6 items-center grid-cols-1 md:grid-cols-2 3xl:grid-cols-3">
            <div className="bg-white p-4 md:p-6 rounded-2xl shadow-md">

              <MultiLineChartOfAgents data={excelData} />
            </div>
            <div className="bg-white p-4 md:p-6 rounded-2xl shadow-md">
            {/* <JitterScatterChart data={excelData} /> */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ManagerPortal;
