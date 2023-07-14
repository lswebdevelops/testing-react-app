import React, { useState } from "react";

function Counter({ initialCount }) {
    const [count, setCount] = useState(initialCount);
  
    const increment = () => {
      setCount((prev) => prev + 1);
    };
  
    const decrement = () => {
      setCount((prev) => prev - 1);
    };
  
    const restart = () => {
      setCount(0);
    };

  const switchSigns = () => {
    setCount((prev) => prev * -1);
  };

  return (
    <div>
      <header>
        <h1>Counter</h1>
      </header>
      <main>
        <h2>Count:</h2>
        <h3 data-testid="count">{count}</h3>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={restart}>Restart</button>
        <button onClick={switchSigns}>Switch Signs</button>
      </main>
    </div>
  );
}

export default Counter;
