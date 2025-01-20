  import React from 'react';
  import { Bar } from 'react-chartjs-2';
  import { Chart, CategoryScale, LinearScale, BarController, BarElement, Title, Tooltip, Legend } from 'chart.js';


  Chart.register(CategoryScale, LinearScale, BarController, BarElement, Title, Tooltip, Legend);

  const DataGraphCallScore = ({ data }) => {
    // console.log(data);
    const callScores = [
      "Empathy & Respect",
      "Clarity and Transparency",
      "Active Listening & Focus",
      "Product/Service Knowledge",
      "Problem-Solving Skills",
    ];

    const getColor = (scoreName) => {
      switch (scoreName) {
        case "Empathy & Respect":
          return 'rgba(75, 192, 192, 0.6)';
        case "Clarity and Transparency":
          return 'rgba(153, 102, 255, 0.6)';
        case "Active Listening & Focus":
          return 'rgba(255, 159, 64, 0.6)';
        case "Product/Service Knowledge":
          return 'rgba(255, 99, 132, 0.6)';
        case "Problem-Solving Skills":
          return 'rgba(54, 162, 235, 0.6)';
        default:
          return 'rgba(0, 0, 0, 0.6)';
      }
    };

    const chartData = {
        labels: [data['Call_ID'].toString()],
        datasets: callScores.map((scoreName) => {
          const scoreData = data['Call_scores'].find((score) => score.name === scoreName);
          console.log(scoreData);
          return {
            label: scoreName,
            data: [scoreData ? scoreData.score : 0], 
            backgroundColor: getColor(scoreName),
            borderColor: getColor(scoreName),
            borderWidth: 1,
          };
        }),
      };


    const options = {
      responsive: true,
      maintainAspectRatio: false,  
      plugins: {
        title: {
          display: true,
          text: 'Call Scores by ID', 
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
      <div style={{ width: '80%', height: '400px', margin: '0 auto' }}> 
        <Bar data={chartData} options={options} />
      </div>
    );
  };

  export default DataGraphCallScore;
