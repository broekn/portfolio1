import React from 'react';
import useDarkMode from './useDarkMode';

const IosSwitch = () => {
  const [darkTheme, handleClick] = useDarkMode();
  return (
    <div
      onClick={handleClick}
      className={`ios-switch ios-switch-${darkTheme === 'saas' ? 'on' : 'off'}`}
    >
      <div className='ios-switch-text'>
        <span>{darkTheme === 'saas' ? 'saas' : 'light'}</span>
      </div>
      <div className='ios-switch-knob'></div>
    </div>
  );
};

export default IosSwitch;
