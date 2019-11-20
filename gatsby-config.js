module.exports = {
  siteMetadata: {
    title: "Snopkowski.com",
    author: "Wojciech Snopkowski",
    description: "I'm Wojciech Snopkowski, a Front-End Developer based in Birmingham, UK.",
    siteUrl: "https://snopkowski.com",
    keywords: 'web developer, developer, birmingham, west midlands, javascript, website, wojciech snopkowski, snopkowski, gatsby, react'
  },
  plugins: [
    `gatsby-plugin-netlify`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: `/thanks`,
      }
    },
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
    `gatsby-plugin-styled-components`,
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
