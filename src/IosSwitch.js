import React from 'react';

const IosSwitch = ({ handleClick, value }) => {
  return (
    <div onClick={handleClick} className={`ios-switch ios-switch-${value}`}>
      <div className='ios-switch-knob'></div>
    </div>
  );
};

export default IosSwitch;
