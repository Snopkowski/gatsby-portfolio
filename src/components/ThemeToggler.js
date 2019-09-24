import React from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import './ThemeToggler.module.scss'

import ThemeTogglerStyles from './ThemeToggler.module.scss'


class Toggler extends React.Component {
  render() {
    return (
      <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <label className={ThemeTogglerStyles.switch}>
            <input
              aria-label='Darkmode'
              type="checkbox"
              onChange={e => {toggleTheme(e.target.checked ? 'dark' : 'light')}}
              checked={theme === 'dark'}/>
              <div className={ThemeTogglerStyles.slider}></div>
              </label>
        )}
      </ThemeToggler>
    )
  }
}

export default Toggler