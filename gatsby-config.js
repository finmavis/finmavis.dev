const ACTIVE_ENV = process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV;
require('dotenv').config({
  path: `.env.${ACTIVE_ENV}`,
});

const config = require('./config');

module.exports = {
  siteMetadata: {
    title: config.title,
    description: config.description,
    author: config.author,
    canonicalUrl: config.canonicalUrl,
    siteUrl: config.siteUrl,
    ogImage: config.ogImage,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-emotion',
    'gatsby-plugin-use-dark-mode',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/shared/assets/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/shared/utils/typography',
        omitGoogleFont: true,
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: [
            'Quattrocento Sans:400,400i,700',
            'Work Sans:600&display=swap',
          ],
        },
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'markdown-pages',
        path: `${__dirname}/src/blog-post`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 800,
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              inlineCodeMarker: '>',
            },
          },
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'nofollow noopener noreferrer',
            },
          },
        ],
      },
    },
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Fin Mavis',
        short_name: 'Fin Mavis',
        start_url: '/',
        background_color: '#216d8e',
        theme_color: '#216d8e',
        display: 'standalone',
        description: 'The personal website of Fin Mavis',
        icon: 'static/android-chrome-512x512.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    'gatsby-plugin-sitemap',
  ],
};
