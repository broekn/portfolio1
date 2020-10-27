import React from 'react';

const IosSwitch = ({ handleClick, darkTheme }) => {
  // console.log(`${darkTheme ? 'dsf' : 'sdfsdf'}`);
  //   console.log(toggleTextValues);
  // console.log(null);
  console.log(true);
  console.log(darkTheme);
  return (
    <div
      onClick={handleClick}
      className={`ios-switch ios-switch-${darkTheme ? 'on' : 'off'}`}
    >
      <div className='ios-switch-text'>
        <span>{darkTheme ? 'on' : 'off'}</span>
      </div>
      <div className='ios-switch-knob'></div>
    </div>
  );
};

export default IosSwitch;
