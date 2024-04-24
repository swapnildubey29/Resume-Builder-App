import React, { useState } from 'react';

const Button = () => {
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);

  const handleToggle1 = () => {
    setToggle1(!toggle1);
  };

  const handleToggle2 = () => {
    setToggle2(!toggle2);
  };


  return (
   
      <div className="left-section">
        <div className={`toggle ${toggle1 ? 'active' : ''}`} onClick={handleToggle1}></div>
        <div className={`toggle ${toggle2 ? 'active' : ''}`} onClick={handleToggle2}></div>
      </div>
  );
};

export default Button;

