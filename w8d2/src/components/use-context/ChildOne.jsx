import React from 'react'
import CountContext from './CountContext';

const ChildOne = () => {
  const {count} = React.useContext(CountContext);

  return (
    <div>
      <h2>I'm Child One</h2>
      <h2>Count: {count}</h2>
    </div>
  )
}

export default ChildOne
