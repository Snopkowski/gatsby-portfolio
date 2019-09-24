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
    {
      resolve: `gatsby-source-contentful`,
      options: {
        

        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      },
    },
    "gatsby-plugin-sass",
    `gatsby-transformer-sharp`,
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-relative-images",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`
      },
    },

    
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Wojciech Snopkowski`,
        short_name: `Snopkowski`,
        start_url: `/`,
        icon: `src/images/icon.png`,
        background_color: `#fff`,
        theme_color: `#111`,
        display: `minimal-ui`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
