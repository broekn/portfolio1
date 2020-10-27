import React from 'react';

const IosSwitch = ({ handleClick, darkTheme }) => {
  // console.log(`${darkTheme ? 'dsf' : 'sdfsdf'}`);
  //   console.log(toggleTextValues);
  // console.log(null);
  //console.log(true);
  //const [darkTheme, handleClick] = useDarkMode();

  console.log(darkTheme);
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
