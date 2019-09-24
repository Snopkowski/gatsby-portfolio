import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql} from 'gatsby'

const Head = ({title, author, siteUrl}) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    description
                    
                }
            }
        }
    `)
    return (
        // <Helmet title={`${title} | ${data.site.siteMetadata.title}`}/>
        <Helmet>
            <title>{title} | {data.site.siteMetadata.title}</title>
            <html lang="en" />
            <meta name="description" content={data.site.siteMetadata.description} />
            <meta author={author}/>
            <meta property="og:url" content={siteUrl} />
            <meta name="keywords" content="web,webdeveloper,developer,react,birmingham,uk,frontend" />
        </Helmet>
    )
}

export default Head