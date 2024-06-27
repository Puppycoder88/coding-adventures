import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const DarkModeToggle = () => {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <label className="switch">
      <input type="checkbox" checked={isDarkMode} onChange={handleToggle} />
      <span className="slider round"></span>
    </label>
  );
};

export default DarkModeToggle;
