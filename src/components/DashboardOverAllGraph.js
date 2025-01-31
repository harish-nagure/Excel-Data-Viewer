import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const centerTextPlugin = {
  id: 'centerText',
  afterDraw: (chart) => {
    const { width, height } = chart;
    const ctx = chart.ctx;

    const score = chart.data.datasets[0].data[0]/10;

    const text = `${score}/5`; 

    const fontSize = 16; 

    ctx.save();
    ctx.font = `bold ${fontSize}px`;
    ctx.font = 'bold';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    ctx.fillStyle = '#000000';
    ctx.fillText(text, width / 2, height / 2);
    ctx.restore();
  },
};

const DashboardOverAllGraph = ({ data }) => {
  const overall_score = data['Overall Call score'];
  const scorePercentage = overall_score * 10;

  const chartData = {
    labels: ['Score', 'Remaining'],
    datasets: [
      {
        label: `Overall Score for Call ID: ${data['Call_ID'].toString()}`,
        data: [scorePercentage, 50 - scorePercentage],
        backgroundColor: ['rgba(33, 158, 11, 0.6)', 'rgba(223, 33, 33, 0.4)'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      tooltip: {
        enabled: false, 
      },
      legend: {
        display: false, 
      },
    },
    cutout: '70%', 
  };

  return (
    <div style={{ width: '100%', height: '100%', margin: '0 auto', padding: '10px' }}>
      
      <Doughnut data={chartData} options={options} plugins={[centerTextPlugin]} />
    </div>
  );
};

export default DashboardOverAllGraph;
