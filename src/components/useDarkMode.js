import { useEffect, useState } from 'react';

const useDarkMode = () => {
  const [darkTheme, setDarkTheme] = useState('light');

  const handleClick = () => {
    if (darkTheme === 'saas') {
      window.localStorage.setItem('darkTheme', 'light');
      setDarkTheme('light');
    } else {
      window.localStorage.setItem('darkTheme', 'saas');
      setDarkTheme('saas');
    }
  };
  useEffect(() => {
    const localTheme = window.localStorage.getItem('darkTheme');
    if (localTheme) {
      setDarkTheme(localTheme);
      console.log('render');
    }
  }, []);

  return [darkTheme, handleClick];
};
export default useDarkMode;
