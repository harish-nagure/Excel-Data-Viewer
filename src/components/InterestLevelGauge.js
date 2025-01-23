import React from 'react';
import GaugeChart from 'react-gauge-chart';

const InterestLevelGauge = ({ callData }) => {

  // console.log(callData);
  const { Call_ID, interest_level, interest_level_percentage } = callData;

  
  const normalizedPercentage = interest_level_percentage / 100;

  return (
    <div style={{ 
      
      width: '100%',
      maxWidth: '300px',
      margin: '0 auto',
      textAlign: 'center',
      
      }}>
      <h3 style={{ marginBottom: '10px' }}>Interest Level: {interest_level}</h3>
      <GaugeChart
        id={`gauge-chart-${Call_ID}`}
        nrOfLevels={10}
        colors={["#FF0000", "#FFA500", "#FFFF00", "#008000", "#0000FF"]}
        arcWidth={0.2}
        percent={normalizedPercentage}
        textColor="#000000"
        style={{ width: '100%', height: 'auto' }}
      />
      <p style={{ fontSize: '18px', fontWeight: 'bold', marginTop: '10px' }}>{interest_level_percentage}%</p>
    </div>
  );
};

export default InterestLevelGauge;
