import React, { useState } from 'react';
import './styles.css';

const App = () => {
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const [intensity, setIntensity] = useState(50);

  const handleToggle1 = () => {
    setToggle1(!toggle1);
  };

  const handleToggle2 = () => {
    setToggle2(!toggle2);
  };

  const handleIntensityChange = (e) => {
    setIntensity(e.target.value);
  };
    
 
  const calculateGradientColor = () => {
    const opacity = intensity / 100;
    return `linear-gradient(to bottom, rgb(18, 241, 233) 0%, rgba(0, 0, 255, ${opacity}) 100%)`;
  };

  return (
    <div className="container">
      <div className="left-section">
        <div className={`toggle ${toggle1 ? 'active' : ''}`} onClick={handleToggle1}></div>
        <div className={`toggle ${toggle2 ? 'active' : ''}`} onClick={handleToggle2}></div>
      </div>

      <div className="right-section">

        <input
          type="range"
          min="0"
          max="100"
          defaultValue={0}
          value={intensity}
          onChange={handleIntensityChange}
          className="slider"
          style={{background:calculateGradientColor()}}
        />
      </div>
    </div>
  );
};

export default App;
