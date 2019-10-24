import React from 'react';
import ToggleStyles from './Toggle.module.scss'


const Toggle = ({ checked, onChange }) => (
  <span className={ToggleStyles.toggleControl}>
    <input
      className={ToggleStyles.dmcheck}
      type="checkbox"
      checked={checked}
      onChange={onChange}
      id="dmcheck"
    />
    <label htmlFor="dmcheck" />
  </span>
);

export default Toggle;
