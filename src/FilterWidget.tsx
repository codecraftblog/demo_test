import React, { useState } from 'react';
import "./App.css"
import { Button } from "./Button"

export const FilterrWidget = (props : any) => {

  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(12);
  
  return (
      <div className="CounterWidget">
      <Button sign="+" incrementCounter={() => setCount(count + 1)}/>
      <h1> {count} </h1>
      <Button sign="-" decrementCounter={() => setCount(count - 1)}/>
      </div>
  );
}