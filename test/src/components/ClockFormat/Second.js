import React from 'react';

const Second = ({seconds}) => {
  return (
    <span>{seconds < 10 && '0'}{seconds}</span>
  )
}

export default Second;