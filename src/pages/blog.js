import React from 'react'
import Layout from '../components/layout'
import { useStaticQuery, graphql, Link } from 'gatsby';
import Head from '../components/head'

import blogStyles from '../styles/blog.module.scss'

const BlogPage = () => {
    const data = useStaticQuery(graphql`
    query {
       allMarkdownRemark(filter: {frontmatter: {type: {eq: "blog"}}}) {
          edges {
            node {
              frontmatter {
                title
                slug
                date
              }
              timeToRead
            }
          }
        }
      }
    `)
    return (
       <div>
            <Layout>
              <Head title='Blog' />
                <h1>Posts</h1>
                <ol className={blogStyles.posts}>
                    {data.allMarkdownRemark.edges.map((edge) => {
                        return(
                            <li className={blogStyles.post}>
                                <Link to={`/blog/${edge.node.frontmatter.slug}`}>
                                    <h2>{edge.node.frontmatter.title}</h2>
                                    <p>{edge.node.frontmatter.date} | {edge.node.timeToRead} min read</p>
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