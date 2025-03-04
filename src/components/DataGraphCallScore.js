import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarController, BarElement, Title, Tooltip, Legend } from 'chart.js';


Chart.register(CategoryScale, LinearScale, BarController, BarElement, Title, Tooltip, Legend);

const DataGraphCallScore = ({ data }) => {

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

  console.log(data, data['Call ID'])
  
  const chartData = {
    labels: callScoresLabel,
    datasets: [

      {
        label: "Call ID: "+data['Call ID'],
        data: callScores.map((scoreName) => {
          const scoreData = data['Call_scores'].find((score) => score.name === scoreName);
          return scoreData ? scoreData.score : 0;
        }),

        backgroundColor: (context) => {
          const gradient = context.chart.ctx.createLinearGradient(0, 0, 0, 300);
          gradient.addColorStop(0, 'rgba(130, 4, 255, 0.2)');
          gradient.addColorStop(1, 'rgba(130, 4, 255, 0.9)');
          return gradient;
        },
        borderRadius: 10,
        barThickness: 40,
      },

    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    
    plugins: {
      

      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            const score = tooltipItem.raw;
            return `${callScores[tooltipItem.dataIndex]}: ${score}`;
          },
        },
      },
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Call ID: "+data['Call_ID'],
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
        min: 0,
        max: 5,
        title: {
          display: true,
          text: 'Call Score',
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
      <h3 className="mb-2 text-xl font-bold">Call Score</h3>
      <p className="text-sm text-gray-500 mb-5">Get insight about the call</p>
      
      

      <div className="w-full h-[250px]">
        <Bar data={chartData} options={options} />
      </div> 


    </div>
  );
};

export default DataGraphCallScore;
