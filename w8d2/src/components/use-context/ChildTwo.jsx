import React from 'react'
import CountContext from './CountContext';

const ChildTwo = () => {
  const {setCount} = React.useContext(CountContext);

  return (
    <div>
      <h2>I am Child Two</h2>
      <button onClick={() => setCount(prev => prev + 1)}>Click me!</button>
    </div>
  )
}

export default ChildTwo;
