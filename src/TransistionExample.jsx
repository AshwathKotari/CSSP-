import React, { useState } from 'react';
import './TransistionExample.css'
const TransitionExample = () => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button onClick={toggleVisibility}>
        Toggle Visibility
      </button>
      <div className={`box ${isVisible ? 'visible' : 'hidden'}`}>
        This is a box with transition effect
      </div>
    </div>
  );
};

export default TransitionExample;
