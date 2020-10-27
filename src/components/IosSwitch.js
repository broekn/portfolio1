import React from 'react';

const IosSwitch = ({ handleClick, toggleValues, iosSwitchState }) => {
  //   console.log(theme);
  //   console.log(toggleTextValues);
  return (
    <div
      onClick={handleClick}
      className={`ios-switch ios-switch-${iosSwitchState}`}
    >
      <div className='ios-switch-text'>
        <span>{toggleValues}</span>
      </div>
      <div className='ios-switch-knob'></div>
    </div>
  );
};

export default IosSwitch;
