import React, { useEffect, useState } from 'react';

export const EffectExample = () => {
  // TODO: Add second counter
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;

    return () => document.title = 'You left the effect example';
  });

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
