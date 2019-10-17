import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql} from 'gatsby'

const Head = ({title, description, keywords}) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    description
                    keywords
                   
                    
                }
            }
        }
    `)
    return (
       <Helmet htmlAttributes={{ lang: "en" }} title={`${title} | ${data.site.siteMetadata.title}`}> 
        <meta name='description' content={description}/>
        <meta name='keywords' content={keywords}/>
       
       </Helmet> 
    )
}

export default Head