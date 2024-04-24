import React, { useState } from 'react';
import './styles.css';
import Button from './button.js';

const App = () => {
  const [intensity, setIntensity] = useState(0);

  const handleIntensityChange = (e) => {
    setIntensity(e.target.value);
  };
    
 
  const calculateGradientColor = () => {
    const opacity = intensity / 100;
    return `linear-gradient(to bottom, rgb(18, 241, 233) 0%, rgba(0, 0, 255, ${opacity}) 100%)`;
  };

  return (
    <div className="container">
      <Button />
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
