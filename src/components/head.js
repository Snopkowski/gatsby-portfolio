import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql} from 'gatsby'

const Head = ({title, description, keywords, author}) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    description
                    keywords
                    author
                   
                    
                }
            }
        }
    `)
    return (
       <Helmet htmlAttributes={{ lang: "en" }} title={`${title} | ${data.site.siteMetadata.title}`}> 
        <meta name='description' content={description || data.site.siteMetadata.description}/>
        <meta name='keywords' content={keywords || data.site.siteMetadata.keywords}/>
        <meta name='author' content={author || data.site.siteMetadata.author}/>
       
       </Helmet> 
    )
}

export default Head