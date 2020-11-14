import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'
import {
  faGithubSquare,
  faLinkedin,
  faMedium,
  faDev,
} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <footer className="mt-12">
      <div className="mb-2">
        <Link to="/contact" aria-label="Contact">
          {' '}
          <FontAwesomeIcon icon={faEnvelopeSquare} />
        </Link>
        <a
          href="https://github.com/Snopkowski"
          rel="noopener noreferrer"
          aria-label="Github"
          target="_blank"
        >
          <FontAwesomeIcon icon={faGithubSquare} />
        </a>
        <a
          href="https://www.linkedin.com/in/wojciechsnopkowski"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          target="_blank"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href="https://www.medium.com/@snopkowski"
          rel="noopener noreferrer"
          aria-label="Medium"
          target="_blank"
        >
          <FontAwesomeIcon icon={faMedium} />
        </a>
        <a
          href="https://dev.to/snopkowski"
          rel="noopener noreferrer"
          aria-label="Dev"
          target="_blank"
        >
          <FontAwesomeIcon icon={faDev} />
        </a>
      </div>
      <p className="text-xs">
        Made by {data.site.siteMetadata.author}, &copy;{' '}
        {new Date().getFullYear()}
      </p>
    </footer>
  )
}

export default Footer
