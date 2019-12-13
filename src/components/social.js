import React from 'react'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faGithub, faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
import {StyledLink} from './common'
import styled from '@emotion/styled'


const Social = () => {
    const SocialWrap = styled.div`
        margin-bottom: 0.5rem;
        a{
            font-size: 1.5rem;
            margin-right: 1rem;
            color: var(--textNormal);
            transition: color .4s ease;

            :hover {
                color: var(--textLink);
            }
        }
    `

    return (
        <SocialWrap>
            <StyledLink to='/contact' aria-label='Contact'> <FontAwesomeIcon icon={faEnvelope} /></StyledLink>
            <a href="https://github.com/Snopkowski" rel="noopener noreferrer" aria-label='Github' target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
            <a href="https://www.linkedin.com/in/wojciechsnopkowski" rel="noopener noreferrer" aria-label='LinkedIn' target="_blank"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            
        </SocialWrap>
    )
}

export default Social