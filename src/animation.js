import React, { useState, useEffect } from 'react';
import './index.css';

export default function Animation2() {
  const [bottomPosition, setBottomPosition] = useState(0);//usestate variables
  const step = 10;//to define every step moment in pixel
  const containerHeight = 400; // same as defined in CSS

  useEffect(() => {
    const handleKeyDown = (event) => {//to handle the input from user through keyboeard
      if (event.key === 'ArrowUp') {//to take javascript function to take task
        setBottomPosition((prev) => Math.min(containerHeight - 50, prev + step));//to take input and choosing the container movement
      } else if (event.key === 'ArrowDown') {//to take javascript function to take task downward
        setBottomPosition((prev) => Math.max(0, prev - step));// to take input in downward direction
      }
    };

    window.addEventListener('keydown', handleKeyDown);//adding the listner to move the keys

    return () => {
      window.removeEventListener('keydown', handleKeyDown);//removing it as to go for next task
    };
  }, []);

  return (
    <div className="container">
      <div className="character" style={{ bottom: `${bottomPosition}px` }}>

      </div>
    </div>
  );
}