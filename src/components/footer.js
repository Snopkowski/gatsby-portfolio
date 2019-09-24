import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import footerStyles from './footer.module.scss'
import Social from './social'
 
const Footer = () => {
    const data = useStaticQuery(graphql`
    query {
        site {
          siteMetadata {
            author
          }
        }
      }
    `);

    return (
        <footer className={footerStyles.footer}>
            <Social />
            <p>Made by {data.site.siteMetadata.author}, &copy; 2019</p>
        </footer>
    )
}

export default Footer