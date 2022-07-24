import React, { useEffect, useState } from 'react';

export default function Count() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Test');
  }, [count]);

  const onAddButtonClick = () => {
    setCount(count + 1);
  };

  const onRemoveButtonClick = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Current Count:{count}</h1>
      <button onClick={onAddButtonClick}>Add</button>
      <button onClick={onRemoveButtonClick}>Remove</button>
    </div>
  );
}
