// Added a new state variable topPosition to track the vertical position of the character.

// Added two new conditions to the handleKeyDown function to handle the ArrowUp and ArrowDown keys. These conditions update the topPosition state variable accordingly.

// Updated the style attribute of the .character2 div to include both left and top properties, which are set using the leftPosition and topPosition state variables, respectively.

// Added a containerHeight variable to define the height of the container, which is used to limit the vertical movement of the character.
import React, { useState, useEffect } from 'react';
import './index.css';

export default function Animation2() {
  const [leftPosition, setLeftPosition] = useState(0);
  const [bottomPosition, setbottomPosition] = useState(0);
  const step = 10;
  const containerWidth = 1600;
  const containerHeight = 600; 

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowRight') {
        setLeftPosition((prev) => Math.min(containerWidth - 50, prev + step));
      } else if (event.key === 'ArrowLeft') {
        setLeftPosition((prev) => Math.max(0, prev - step));
      } else if (event.key === 'ArrowUp') {
        setbottomPosition((prev) => Math.max(0, prev - step));
      } else if (event.key === 'ArrowDown') {
        setbottomPosition((prev) => Math.min(containerHeight - 50, prev + step));
      }
    };
  
    window.addEventListener('keydown', handleKeyDown);
  
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="container">
      <div
        className="character2"
        style={{
          left: `${leftPosition}px`,
          top: `${bottomPosition}px`,
        }}
      >

      </div>
    </div>
  );
}