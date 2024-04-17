import React, { useState } from 'react';
import { Scrollama, Step } from 'react-scrollama';
import './StickyLeftScrollama.css';

const StickyLeftScrollama = (props) => {
  const [dataset, setDataset] = useState({
    data: 0,
    steps: [10, 20, 30],
    progress: 0,
  });
  const LeftComponent = props.leftComponent;
  const RightComponent = props.rightComponent;

  const handleStepEnter = ({ data }) => {
    setDataset(prevData => ({ ...prevData, data: data}));
  };

  const handleStepProgress = ({ progress }) => {
    setDataset(prevData => ({ ...prevData, progress: progress}));
  };

  return (
    <div className="sectionContainer">
      <div className="leftContainer">
        <LeftComponent />
      </div>
      
      <div className="scrollamaContainer">
        <Scrollama 
          className="scrollama" 
          onStepEnter={handleStepEnter}
          progress
          onStepProgress={handleStepProgress}
          offset={0.4}
          // debug
          >
          {dataset.steps.map(value => {
            const isVisible = value === dataset.data;
            const background = isVisible
              ? `rgba(44,127,184, ${dataset.progress})`
              : 'white';
            const visibility = isVisible ? 'visible' : 'hidden';
            return (
              <Step data={value} key={value}>
                <div className="step" style={{ background }}>
                  <RightComponent value={value} />
                </div>
              </Step>
            );
          })}
        </Scrollama>
      </div>
    </div>
  );
};

export default StickyLeftScrollama;