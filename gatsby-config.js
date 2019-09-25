/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Snopkowski.com",
    author: "Wojciech Snopkowski",
    description: "I'm Wojciech, a Front-End Developer based in Birmingham, UK.",
    siteUrl: "https://snopkowski.com",
  },
  plugins: [
    `gatsby-plugin-netlify`,
    `gatsby-plugin-dark-mode`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-147523947-1",
      },
    },
    "gatsby-plugin-sass",
    `gatsby-transformer-sharp`,
    "gatsby-plugin-sharp",
    "gatsby-transformer-remark",
    
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-relative-images",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 800,
            }
          }
        ],
      },
    },
    
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src`,
        name: 'src',
      }
    },
  
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Wojciech Snopkowski`,
        short_name: `WS`,
        start_url: `/`,
        icon: `src/images/icon.png`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
