import React, { useState } from 'react';

export const StateExample = () => {
  // TODO: Add second counter
  const [count, setCount] = useState(0);

  const clickCounter = () => setCount(count + 1)

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={clickCounter}>
        Click me
      </button>
    </div>
  );
};
