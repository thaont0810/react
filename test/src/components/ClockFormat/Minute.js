import React from 'react';

const Minute = ({minutes}) => {
  return (
    <span>{minutes < 10 && '0'}{minutes}</span>
  )
}

export default Minute;