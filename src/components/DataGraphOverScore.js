import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';


ChartJS.register(ArcElement, Tooltip, Legend);

const DataGraphOverScore = ({ data }) => {
  console.log(data);

  
  const overall_score = data['Overall Call score'];
  const scorePercentage = (overall_score ) * 10;

  console.log(overall_score,scorePercentage);

  const chartData = {
    labels: ['Score', 'Remaining'], 
    datasets: [
      { 
        label: `Overall Score for Call ID: ${data['Call_ID'].toString()}`,
        data: [scorePercentage, 50 - scorePercentage],
        backgroundColor: ['rgba(33, 158, 11, 0.6)', 'rgba(223, 33, 33, 0.4)'],
        borderWidth: 1,
        circumference: 360, 
        rotation: 360, 
      },
    ],
    
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      tooltip: {
        enabled: true,
        position: 'nearest',
        callbacks: {
          label: (context) => {
            return `${context.label}: ${context.raw}%`;
          },
        },
      },
      legend: {
        display: false,
      },
    },
    cutout: '40%', 
  };



  return (
  <div style={{ width: '100%', height: '100%', margin: '0 auto', padding: '10px' }}>
    <Doughnut data={chartData} options={options} />
    
  </div>
  );
};

export default DataGraphOverScore;
