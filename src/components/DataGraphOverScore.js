import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const DataGraphOverScore = ({ data }) => {


  const overall_score = data['Overall Call score'];
  const scorePercentage = (overall_score / 5) * 100;
  const colorLabel =['rgba(130, 4, 255, 0.94)','rgba(198, 134, 248, 0.4)']
  const centerTextPlugin = {
    id: 'centerText',
    afterDraw: (chart) => {
      const { chartArea } = chart; 
      const ctx = chart.ctx;

      if (!chartArea) return; 

      const { left, right, top, bottom } = chartArea;
      const centerX = (left + right) / 2; 
      const centerY = (top + bottom) / 2;

      const score = overall_score.toString();

      const text = `${score}/5`;

      const fontSize = 28; 
      ctx.save();
      ctx.font = `bold ${fontSize}px Inter`;
      ctx.textAlign = 'center'; 
      ctx.textBaseline = 'middle'; 
      ctx.fillStyle = '#000000';
      ctx.fillText(text, centerX, centerY); 
      ctx.restore();
    },
  };

  const createGradient = (ctx, chartArea) => {
    const gradient = ctx.createLinearGradient(chartArea.left, chartArea.top, chartArea.right, chartArea.bottom);
    gradient.addColorStop(0, 'rgba(130, 4, 255, 0.3)'); 
    gradient.addColorStop(1, 'rgba(130, 4, 255, 0.94)'); 
    return gradient;
  };

  const chartData = {
    labels: ['Score', 'Remaining'],
    datasets: [
      {
        label: `Overall Score for Call ID: ${data['Call_ID'].toString()}`,
        data: [scorePercentage, 100 - scorePercentage],
        backgroundColor:  (ctx) => {
          if (!ctx.chart.chartArea) return ['#8061DB', '#E5E7EB']; 
          return [createGradient(ctx.chart.ctx, ctx.chart.chartArea), 'rgba(198, 134, 248, 0.4)']; // Gradient + Gray
        },
        hoverBackgroundColor: (ctx) => {
          if (!ctx.chart.chartArea) return ['#8061DB', '#E5E7EB']; 
          return [createGradient(ctx.chart.ctx, ctx.chart.chartArea), 'rgba(198, 134, 248, 0.4)']; // Gradient + Gray
        },
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
      legend: {
        display: true,
        position: 'right',
        align: 'start',
        labels: {
          usePointStyle: true,
          padding: 20,
          font:{
            size:14,
            weight: 'bold', 
          },
          generateLabels: (chart) =>
            chart.data.labels.map((label, index) => {
              const value = chart.data.datasets[0].data[index];
              const color = colorLabel[index];
              return {
                text: `   ${label}: ${value}%`,
                
                pointStyle: 'circle',
                fillStyle: 'transparent',
                strokeStyle: color,
                lineWidth: 5,
                fontColor:'#99B2C6',
              };
            }),
        },
      },
      tooltip: {
        enabled: true,
        callbacks: {
          label: (context) => `${context.label}: ${context.raw}%`,
        },
      },
    },
    cutout: '70%',
  };

  return (
    <div className="w-full h-full items-center">
      <h3 className="mb-2 text-xl font-bold">Overall Score</h3>
      <p className="text-sm text-gray-500 mb-5">Overall score of the call</p>
      <div className="w-full h-[200px] md:h-[230px] lg:h-[250px] flex justify-center">
      <div className="w-full h-[180px] md:h-[200px] lg:h-[220px] flex justify-center">
        
        <Doughnut data={chartData} options={options} plugins={[centerTextPlugin]} />
        </div>
      </div>
    </div>
  );
};

export default DataGraphOverScore;
