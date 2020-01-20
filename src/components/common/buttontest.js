import styled from "@emotion/styled"

export const ButtonTest = styled.button`
  background: var(--bg);
  color: var(--textNormal);
  width: 10rem;
  height: 3rem;
  border-radius: 4px;
  border: 2px solid var(--textNormal);
  cursor: pointer;
  display: block;
  margin: 0 auto;
  transition: transform 0.3s;
  overflow: hidden;
  position: relative;

  :hover {
    color: yellow;
    border-color: blue;
  }

  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 150%;
    height: 100%;
    background: blue;
    opacity: 0;
    transform: rotate3d(0, 0, 1, -45deg) translate3d(0, -3em, 0);
    transform-origin: 0% 100%;
    transition: transform 0.3s, opacity 0.3s, background-color 0.3s;

    :hover {
      opacity: 1;
      background-color: #3f51b5;
      transform: rotate3d(0, 0, 1, 0deg);
      transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
    }
  }
`
