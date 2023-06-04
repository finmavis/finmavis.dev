import path from 'path';
import dotenv from 'dotenv';

const ACTIVE_ENV = process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV;
dotenv.config({
  path: `.env.${ACTIVE_ENV}`,
});

const config = require('./config');

module.exports = {
  siteMetadata: {
    title: config.title,
    description: config.description,
    name: config.name,
    author: config.nickname,
    siteUrl: config.siteUrl,
    ogImage: config.ogImage,
    email: config.email,
    social: config.social,
  },
  plugins: [
    'gatsby-plugin-root-import',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-image',
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [config.gaMeasurementId],
      },
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-use-dark-mode',
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: path.resolve('./src/components/layout'),
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `./src/shared/assets/images`,
      },
    },
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
        path: `./src/blog-post`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-relative-images`,
            options: {
              // [Optional] The root of "media_folder" in your config.yml
              // Defaults to "static"
              staticFolderName: 'images',
              // [Optional] Include the following fields, use dot notation for nested fields
              // All fields are included by default
              include: ['image'],
            },
          },
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
        name: config.nickname,
        short_name: config.nickname,
        start_url: '/',
        background_color: config.themeColor,
        theme_color: config.themeColor,
        display: 'standalone',
        description: config.description,
        icon: config.manifestImage, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-sitemap',
  ],
};
