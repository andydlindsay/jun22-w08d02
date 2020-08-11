import React from 'react'
import ChildTwo from './ChildTwo';
import CountContext from './CountContext';
import Inbetween from './Inbetween';

const UseContext = () => {
  const [count, setCount] = React.useState(0);

  return (
    <CountContext.Provider value={{count, setCount}}>
      <Inbetween />
      <ChildTwo />
    </CountContext.Provider>
  )
}

export default UseContext
