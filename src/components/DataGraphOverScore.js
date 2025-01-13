import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarController, BarElement, Title, Tooltip, Legend } from 'chart.js';


Chart.register(CategoryScale, LinearScale, BarController, BarElement, Title, Tooltip, Legend);

const DataGraphOverScore = ({ data , }) => {

  const chartData = {
    labels: data.map((item) => item['Call_ID']),  
    datasets: [{
        label: 'Overall Call Score',
        data: data.map((item) => item['Overall Call score']),
    
      backgroundColor: 'rgba(153, 102, 255, 0.8)',
      borderColor: 'rgba(153, 102, 255, 1)',
      borderWidth: 1,
      borderRadius: 10,
    }],
  };


  const options = {
    responsive: true,
    maintainAspectRatio: false,  
    plugins: {
      title: {
        display: true,
        text: ' Overall Call Scores by ID', 
        font: {
          size: 20,
          family: 'Arial, sans-serif',  
        },
        padding: {
          bottom: 30,
        },
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
        position: 'bottom',
        labels: {
          font: {
            size: 12,  
            
          },
          
        },
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
    <div
  style={{
    width: '80%',
    height: '400px',
    margin: '0 auto',
  }}
>
  <Bar data={chartData} options={options}  />
</div>

  );
};

export default DataGraphOverScore;
