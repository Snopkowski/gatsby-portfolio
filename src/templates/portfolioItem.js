import React from 'react'
import portfolioItemStyles from '../styles/portfolioItem.module.scss'
import Img from 'gatsby-image'

const PortfolioItem = ({portfolio}) => {
    const { title, live, source, stack, image, description } = portfolio.frontmatter;
    return (
        <>
        <h2>{title}</h2>
        <Img className={portfolioItemStyles.thumbnail} fluid={image.childImageSharp.fluid} />
        <h3>{stack}</h3>
        <a className={portfolioItemStyles.itemLink} href={live}>Live</a>
        <a className={portfolioItemStyles.itemLink} href={source}>Code</a>
        <p className={portfolioItemStyles.description} >{description}</p>
        </>
    )
}
export default PortfolioItem