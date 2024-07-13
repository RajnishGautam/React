import React, { useState, useEffect } from "react";

export default function Hooks4() {
  const [count, setCount] = useState(0);
  useEffect(()=>{
    setTimeout(()=>{
        setCount(()=>count+1)

    },1000);
});

const handleReset = () => {
    setCount(0);
  };
    return(
        <div>
        <h1>Time: {count}</h1>
        <button onClick={handleReset}>Reset</button>
      </div>
    );
    
  }