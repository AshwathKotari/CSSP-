import React, { useState } from 'react';
import './AnimationExample.css'
const AnimationExample = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  const startAnimation = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 1000); // Reset animation after 1 second
  };

  return (
    <div>
      <button onClick={startAnimation}>
        Start Animation
      </button>
      <div className={`animated-box ${isAnimating ? 'animate' : ''}`}>
        This is a box with animation
      </div>
    </div>
  );
};

export default AnimationExample;

