import React from 'react'
import Layout from '../components/layout'
import { useStaticQuery, graphql, Link } from 'gatsby';
import Head from '../components/head'

import blogStyles from './blog.module.scss'

const BlogPage = () => {
    const data = useStaticQuery(graphql`
    query {
       allMarkdownRemark(filter: {frontmatter: {type: {eq: "blog"}}}) {
          edges {
            node {
              frontmatter {
                title
                slug
              }
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
                    {data.allMarkdownRemark.edges.map((edge) => {
                        return(
                            <li className={blogStyles.post}>
                                <Link to={`/blog/${edge.node.frontmatter.slug}`}>
                                    <h2>{edge.node.frontmatter.title}</h2>
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