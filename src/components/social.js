import React from 'react'
import './footer.module.scss'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faGithub, faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
import { Link } from 'gatsby'
import socialStyles from './social.module.scss'

const Social = () => {
    return (
        <div className={socialStyles.social}>
            <Link to='/contact' aria-label='Contact'> <FontAwesomeIcon icon={faEnvelope} /></Link>
            <a href="https://github.com/Snopkowski" rel="noopener noreferrer" aria-label='Github' target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
            <a href="https://www.linkedin.com/in/wojciechsnopkowski" rel="noopener noreferrer" aria-label='LinkedIn' target="_blank"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            
        </div>
    )
}

export default Social