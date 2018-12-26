import React from 'react';

const Ampm = ({hours}) => {
  return (
    <span>{hours >= 12 ? 'pm' : 'am'}</span>
  )
}

export default Ampm;