import React from 'react';

import Toggle from './Toggle';
import useDarkMode from 'use-dark-mode';
import ToggleStyles from './Toggle.module.scss'

const DarkModeToggle = () => {
  const darkMode = useDarkMode(false);

  return (
    <div className={ToggleStyles.darkModeToggle}>
      <button type="button" onClick={darkMode.disable}>
      &#9728;
      </button>
      <Toggle checked={darkMode.value} onChange={darkMode.toggle} />
      <button type="button" onClick={darkMode.enable}>
      &#9790;
      </button>
    </div>
  );
};

export default DarkModeToggle;
