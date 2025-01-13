import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';


ChartJS.register(ArcElement, Tooltip, Legend);

const InterestLevelGauge = ({ callData }) => {
  const { Call_ID, interest_level, interest_level_percentage } = callData;
  
  const isInterested = interest_level.trim().toUpperCase() === "INTERESTED";

  const remain = isInterested ? 'NOT INTERESTED' : 'INTERESTED'
  let  gaugeColor = 'rgba(33, 158, 11, 0.6)';
  let grayColor = 'rgba(223, 33, 33, 0.4)';


  if(!isInterested){
    gaugeColor = 'rgba(223, 33, 33, 0.4)';
    grayColor ='rgba(33, 158, 11, 0.6)' ;
  }

  const chartData = {
    labels: [interest_level.trim(), remain],
    datasets: [
      {
        label: `Interest Level for Call ID: ${Call_ID}`,
        data: [interest_level_percentage, 100 - interest_level_percentage], 
        backgroundColor: [gaugeColor,grayColor],
        borderWidth: 1,
        circumference: 360, 
        rotation: 360, 
      },
    ],
    
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        enabled: true,
        callbacks: {
          label: (context) => {
            return `${context.dataset.label}: ${context.raw}%`;
          },
        },
      },
      legend: {
        display: true,
      },
    },
    cutout: '70%', 
  };

  return (
    <div>
    <div style={{ width: '600px', height: '300px', margin: '0 auto' }}>
      <Doughnut data={chartData} options={options} />
      </div>
    </div>
    
  );
};

export default InterestLevelGauge;
