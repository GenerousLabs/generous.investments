require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const title = `Generous`;

module.exports = {
  siteMetadata: {
    title,
    description: `Generous is a slightly different type of company`,
    author: `Generous Labs`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        // stylesProvider: {
        //   injectFirst: true,
        // },
      },
    },
    {
      resolve: 'gatsby-plugin-module-resolver',
      options: {
        root: './src',
        aliases: {
          components: './components',
          containers: './containers',
          images: './images',
          state: './state',
          styles: './styles',
          utils: './utils',
          static: {
            root: './public',
            alias: './static',
          },
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/../content/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/../content/posts`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: title,
        short_name: title,
        start_url: `/`,
        background_color: `black`,
        theme_color: `black`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-react-redux`,
      options: {
        pathToCreateStoreModule: './src/state/store',
        serialize: {
          space: 0,
          isJSON: true,
          unsafe: false,
        },
      },
    },
  ],
};
