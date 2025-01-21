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


  // const chartData = {
  //   labels: [data['Call_ID'].toString()],  
  //   datasets: [{
  //       label: 'Overall Call Score',
  //       data: [data['Overall Call score']],
  //       backgroundColor: 'rgba(153, 102, 255, 0.8)',
  //       borderColor: 'rgba(153, 102, 255, 1)',
  //       borderWidth: 1,
  //       borderRadius: 10,
  //   }],
  // };


  // const options = {
  //   responsive: true,
  //   maintainAspectRatio: false,  
  //   plugins: {
  //     title: {
  //       display: true,
  //       text: ' Overall Call Scores by ID', 
  //       font: {
  //         size: 20,
  //         family: 'Arial, sans-serif',  
  //       },
  //       padding: {
  //         bottom: 30,
  //       },
  //     },
  //     tooltip: {
  //       callbacks: {
  //         label: (tooltipItem) => {
  //           const score = tooltipItem.raw;
  //           return `${tooltipItem.dataset.label}: ${score}`;
  //         },
  //       },
  //     },
  //     legend: {
  //       position: 'bottom',
  //       labels: {
  //         font: {
  //           size: 12,  
            
  //         },
          
  //       },
  //     },
  //   },
   
  //   scales: {
  //     x: {
  //       type: 'category',  
  //       title: {
  //         display: true,
  //         text: 'Call ID',  
  //         font: {
  //           size: 14,
  //           family: 'Arial, sans-serif',
  //         },
  //       },
  //       grid: {
  //         display: false,  
  //       },
  //     },
  //     y: {
  //       type: 'linear',  
  //       min: 0,
  //       max: 5,          
  //       title: {
  //         display: true,
  //         text: 'Score',  
  //         font: {
  //           size: 14,
  //           family: 'Arial, sans-serif',
  //         },
  //       },
  //       ticks: {
  //         stepSize: 1,  
  //       },
  //       grid: {
  //         display: true,  
  //       },
  //     },
  //   },
  // };

  return (
//     <div
//   style={{
//     width: '80%',
//     height: '400px',
//     margin: '0 auto',
//   }}
// >
//   <Bar data={chartData} options={options}  />
// </div>
  
  <div style={{ width: '350px', height: '350px', margin: '0 auto', padding: '10px' }}>
    <Doughnut data={chartData} options={options} />
    <p style={{ textAlign: 'center', marginTop: '10px', fontSize: '16px', fontWeight: 'bold' }}>
        Overall Score: {overall_score} / 5
    </p> 
  </div>
  );
};

export default DataGraphOverScore;
