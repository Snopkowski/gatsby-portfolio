import React from 'react';

import Toggle from './Toggle';
import useDarkMode from 'use-dark-mode';
import ToggleStyles from './Toggle.module.scss'

const DarkModeToggle = () => {
  const darkMode = useDarkMode(false);

  return (
    <div className={ToggleStyles.darkModeToggle}>
      <Toggle checked={darkMode.value} onChange={darkMode.toggle} />
    </div>
  );
};

export default DarkModeToggle;
