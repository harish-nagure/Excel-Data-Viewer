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
