import React from 'react';
import GaugeComponent from 'react-gauge-component';


const InterestLevelGauge = ({ data }) => {

  const getInterestLabel = (value) => {
    if (value === 0) return "";
    if (value <= 16) return "Not Interested";
    if (value <= 33) return "Slightly Interested";
    if (value <= 50) return "Somewhat Interested";
    if (value <= 66) return "Moderately Interested";
    if (value <= 83) return "Very Interested";
    if (value === 100) return "Extremely Interested";
  };
  
  // const colorArray = ["#FF5656", "#FF8888", "#FEE114", "#D1D80F", "#84BD32", "#30AD43"];
  
  const { interest_level, interest_level_percentage } = data;

  let normalizedPercentage;
  if (interest_level.toUpperCase() === "NOT INTERESTED") {
    normalizedPercentage = (100 - interest_level_percentage);
  } else {
    normalizedPercentage = interest_level_percentage;
  }

  return (
    <div className='h=full'>
    <h3 className="mb-2 text-xl font-bold">Interest Level</h3>
    <p className="text-sm text-gray-500 mb-2">Get insight about the call</p>
    <div className="w-full max-w-md mx-auto flex flex-col items-center">

      <div className="flex justify-center items-center w-full">
        <GaugeComponent 
          className='w-full'
          type="semicircle"
          arc={{
            width: 0.2,
            padding: 0.05,
            cornerRadius: 10,
            subArcs: [
              { limit: 0, showTick: false },
              { limit: 16, color: '#FF5656', showTick: true, tooltip: { text: 'Not Interested' } },
              { limit: 33, color: '#FF8888', showTick: true, tooltip: { text: 'Slightly Interested' } },
              { limit: 50, color: '#FEE114', showTick: true, tooltip: { text: 'Somewhat Interested' } },
              { limit: 66, color: '#D1D80F', showTick: true, tooltip: { text: 'Moderately Interested' } },
              { limit: 83, color: '#84BD32', showTick: true, tooltip: { text: 'Very Interested' } },
              { limit: 100, color: '#30AD43', showTick: true, tooltip: { text: 'Extremely Interested' } }
            ],
          }}
          pointer={{
            color: '#323232',
            length: 0.80,
            width: 12,
          }}
          labels={{
            valueLabel: {
              formatTextValue: (val) => `${val}%`,
              style:{
                fontSize:20,
                fill:"#8204FF",
                textShadow: "2px 2px 5px rgba(255, 255, 255, 0.3)",
              }
            },
            tickLabels: {
              type: 'outer',
              defaultTickValueConfig: {
                formatTextValue: (tickVal) => getInterestLabel(tickVal),
                style: { fontSize: 10, fill: "#9B9B9B" },
              },
              defaultTickLineConfig: {
                distanceFromArc: 0.55,
              },
            }
          }}
          value={normalizedPercentage}
          minValue={0}
          maxValue={100}
        />
      </div>

      <div className="mt-4 text-center">Customer is {getInterestLabel(normalizedPercentage)}</div>
    </div>
    </div>
  );
};

export default InterestLevelGauge;
