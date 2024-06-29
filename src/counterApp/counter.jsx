import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);     //state with count value 0

  const increment = () => {     // function to increment the counter
    setCount(count + 1);
  };

  const decrement = () => {      // function to decrement the counter
    setCount(count => (count > 0 ?
        count - 1 : 0)
    );
  };
  const reset = () => {          // function to reset the counte
    setCount(0);
  };

  return (
    <div>
      <h1>Counter</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter;
