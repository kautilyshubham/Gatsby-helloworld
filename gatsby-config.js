/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */


module.exports = {
  /* Your site config here */

  // meta deta
  siteMetadata: {
    title: 'Gatsby Bootcamp',
    author: 'Shubham'
  },

  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: 'liyy3lcot9r3',
        accessToken: 'MXBy-1GIPqnWtBcnd0jDdY7KySN1MQmPPvejaW7yOFc'
      }

    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/blogs`,
      },
    },
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: '100%',
              linkImagesToOriginal: false
            }
          }
        ]
      }
    }

  ]
}
