import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';


ChartJS.register(ArcElement, Tooltip, Legend);

const DataGraphOverScore = ({ data }) => {

  const overall_score = data['Overall Call score'];
  const scorePercentage = (overall_score ) * 10;

  console.log(overall_score,scorePercentage);

  const chartData = {
    labels: ['Score'],
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
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        enabled: true,
        callbacks: {
          label: (context) => {
            return `${context.label}: ${context.raw}%`;
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
  <div style={{ width: '350px', height: '350px', margin: '0 auto', padding: '10px' }}>
    <Doughnut data={chartData} options={options} />
    <p style={{ textAlign: 'center', marginTop: '10px', fontSize: '16px', fontWeight: 'bold' }}>
        Overall Score: {overall_score} / 5
    </p> 
  </div>
  );
};

export default DataGraphOverScore;
