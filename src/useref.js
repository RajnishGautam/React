// basically use ref hook is use to persist values of Webpage render 
import React, { useRef, useState, useEffect } from 'react';
import './App.css';

export default function App() {
  const boxRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isAnimating) {
      boxRef.current.style.transform = 'translateX(300px)';
    } else {
      boxRef.current.style.transform = 'translateX(0)';
    }
  }, [isAnimating]);

  const handleClick = () => {
    setIsAnimating(!isAnimating);
  };

  return (
    <div className="App">
      <button onClick={handleClick}>Toggle Animation</button>
      <div ref={boxRef} className="box"></div>
    </div>
  );
}