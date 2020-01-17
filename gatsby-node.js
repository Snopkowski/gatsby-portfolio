const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}
exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const result = await graphql(`
      query {
        allMarkdownRemark(filter: {frontmatter: {type: {eq: "blog"}}}, sort: {fields: frontmatter___order, order: DESC}) {
          edges {
            node {
              frontmatter {
                slug
                title
              }
            }
            next {
              frontmatter {
                slug
                title
              }
            }
            previous {
              frontmatter {
                slug
                title
              }
            }
          }
        }
      }
    `)
    const blogposts = result.data.allMarkdownRemark.edges
    blogposts.forEach(({ node }, index) => {
        createPage({
          path: `blog/${node.frontmatter.slug}`,
          component: path.resolve(`./src/templates/blog.js`),
          context: {
            slug: node.frontmatter.slug,
            prev: index === 0 ? null : blogposts[index - 1].node,
            next: index === (blogposts.length -1) ? null : blogposts[index + 1].node
          },
        })
      })
  }