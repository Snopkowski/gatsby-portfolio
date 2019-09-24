import React from 'react'
import portfolioItemStyles from './portfolioItem.module.scss'
import Img from 'gatsby-image'

const PortfolioItem = ({portfolio}) => {
    const { title, live, code, stack, image, description } = portfolio;

    return (
        <>
        <h2>{title}</h2>
        <Img sizes={image.sizes} />
        <h3>{stack}</h3>
        <p>{description}</p>
        <a className={portfolioItemStyles.itemLink} href={live}>Live</a>
        <a className={portfolioItemStyles.itemLink} href={code}>Code</a>
        </>
    )
}


export default PortfolioItem