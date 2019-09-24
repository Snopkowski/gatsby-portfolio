import React from 'react'
import Layout from '../components/layout'
import { useStaticQuery, graphql, Link } from 'gatsby';
import Head from '../components/head'

import blogStyles from './blog.module.scss'

const BlogPage = () => {
    const data = useStaticQuery(graphql`
    query {
        allContentfulBlogPost(
          sort: {
            fields:publishedDate,
            order:DESC
          }
        ) {
          edges {
            node {
              title
              slug
              publishedDate (formatString:"do of MMMM, YYYY")
            }
          }
        }
      }
    `)
  
    return (
       <div>
            <Layout>
              <Head title='Blog'/>
                <h1>Posts</h1>
                <ol className={blogStyles.posts}>
                    {data.allContentfulBlogPost.edges.map((edge) => {
                        return(
                            <li className={blogStyles.post}>
                                <Link to={`/blog/${edge.node.slug}`}>
                                    <h2>{edge.node.title}</h2>
                                    <p>{edge.node.publishedDate}</p>
                                </Link>
                            </li>
                        )
                    })}
                </ol>
             
            </Layout>

       </div>
    )
}

export default BlogPage