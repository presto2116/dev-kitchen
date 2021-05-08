module.exports = {
  siteMetadata: {
    title: 'Dev Kitchen',
    description: `Preston's blog about all things dev`,
    author: 'Preston Straight',
    siteUrl: 'https://github.com/presto2116',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-netlify',
    `gatsby-plugin-theme-ui`,
    `gatsby-transformer-json`,
    `gatsby-plugin-mdx`,
    {
      resolve: 'gatsby-plugin-force-trailing-slashes',
      options: {
        excludedPaths: ['/404.html'],
      },
    },
    {
      // used for gatsby-transformer-javascript-frontmatter
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `code`,
        path: `${__dirname}/src/code/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `recipes`,
        path: `${__dirname}/src/recipes/`,
      },
    },
    'gatsby-transformer-javascript-frontmatter',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1500,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: `${__dirname}/src/data/favicon.svg`,
      },
    },
  ],
};
