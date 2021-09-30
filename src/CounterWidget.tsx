import React, { useState } from 'react';
import "./App.css"
import { CustButton } from "./Button"

export const CounterWidget = (props : any) => {

  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(12);
  
  return (
      <div className="CounterWidget">
      <CustButton sign="+" incrementCounter={() => setCount(count + 1)}/>
      <h1> {count} </h1>
      <CustButton sign="-" decrementCounter={() => setCount(count - 1)}/>
      </div>
  );
}