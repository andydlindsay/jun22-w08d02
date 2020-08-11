import React from 'react'

const UseRef = () => {
  const inputRef = React.useRef();
  const countRef = React.useRef();
  const [count, setCount] = React.useState(0);

  countRef.current = count;

  const handleClick = () => {
    inputRef.current.focus();
  };

  const launchAlert = () => {
    setTimeout(() => {
      // alert(`count: ${count}`);
      alert(`count: ${countRef.current}`);
    }, 3000);
  };

  return (
    <div>
      <h2>Use Ref</h2>

      <label htmlFor="generic-input">Input:</label>
      <input id="generic-input" ref={inputRef} />

      <button onClick={handleClick}>Set Focus</button>

      <h2>Count: {count}</h2>
      <button onClick={() => setCount(prev => prev + 1)}>Click Me</button>

      <button onClick={launchAlert}>Show Alert</button>
    </div>
  )
}

export default UseRef
