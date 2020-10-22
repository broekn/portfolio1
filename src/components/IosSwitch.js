import React from 'react';

const IosSwitch = ({ handleClick, value, theme }) => {
  return (
    <div onClick={handleClick} className={`ios-switch ios-switch-${value}`}>
      <div className='ios-switch-text'>
        {value === 'on' ? <span>{theme}</span> : <span>{theme}</span>}
      </div>
      <div className='ios-switch-knob'></div>
    </div>
  );
};

export default IosSwitch;
