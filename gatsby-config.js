/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Snopkowski.com",
    author: "Wojciech Snopkowski",
    description: "I'm Wojciech Snopkowski, a Front-End Developer based in Birmingham, UK.",
    siteUrl: "https://snopkowski.com",
    keywords: 'web developer, developer, birmingham, javascript, website, wojciech snopkowski, snopkowski'
  },
  plugins: [
    `gatsby-plugin-netlify`,
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
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        duration: 1000
      }
    },
    `gatsby-plugin-emotion`,
    {
      resolve: 'gatsby-plugin-page-progress',
      options: {
        height: 3,
        prependToBody: false,
        excludePaths: ['/contact', '/blog'],
        color: `#d86a7e`,
      }
    },
    
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-relative-images",
          `gatsby-remark-lazy-load`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-vscode`,
          `gatsby-remark-responsive-iframe`,
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'noreferrer',
            }
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 900
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
        display: `minimal-ui`,
        background_color: `#111`,
        theme_color: `#d86a7e`
      },
    },
    `gatsby-plugin-offline`,
    'gatsby-plugin-robots-txt'
  ],
}
