import React from 'react';

const Notification = (props) => {
  const {level, mess} = props;
  const classNames = ['alert', 'alert-' + level]
  return (
    <div className = {classNames}>
      {mess}
    </div>
  )
}

export default Notification;