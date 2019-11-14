import styled from "styled-components"
import {Link} from 'gatsby'

export const StyledLink = styled(Link)`
  font-size: ${props => props.big ? '2.2rem'  : '.9rem'};
  margin-right: 1.3rem;
  text-decoration: none;
  margin-top: 0.6rem;
  flex-wrap: nowrap;
  color: var(--textNormal);
`
