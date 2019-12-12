import React from "react"
import styled from "@emotion/styled"

const Toggle = ({ checked, onChange }) => {
  const ToggleControl = styled.span`
    position: relative;
    padding: 0 0.2rem;
    display: flex;
    align-items: center;
    border: none;
  `

  const DMcheck = styled.input`
    width: 2.5rem;
    height: 0.5rem;
    background: var(--bgCode);
    position: relative;
    border-radius: 5px;
    appearance: none;
    cursor: pointer;
    outline: none;
    transition: all 0.3s forwards;

    & :checked + label {
      left: 30px;
    }

    & :focus-visible {
      outline: solid 2px white;
    }

    & + label {
      display: inline-block;
      width: 18px;
      height: 18px;
      border-radius: 50%;
      cursor: pointer;
      position: absolute;
      left: 2px;
      background-color: var(--textNormal);
    }
  `

  return (
    <ToggleControl>
      <DMcheck
        type="checkbox"
        checked={checked}
        onChange={onChange}
        id="dmcheck"
        aria-label="Toggle darkmode"
      />
      <label htmlFor="dmcheck" />
    </ToggleControl>
  )
}

export default Toggle
