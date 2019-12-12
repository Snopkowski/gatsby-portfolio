import React from 'react';
import Toggle from './Toggle';
import useDarkMode from 'use-dark-mode';
import styled from '@emotion/styled'

const DarkModeToggle = () => {
  const darkMode = useDarkMode(false);

  const DMToggle = styled.div`
    display: flex;
  `

  return (
    <DMToggle>
      <Toggle checked={darkMode.value} onChange={darkMode.toggle} />
    </DMToggle>
  );
};

export default DarkModeToggle;
