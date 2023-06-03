/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

function SEO({ description, lang, title, isBlogPost, image, pathname }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
            ogImage
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const metaImagePath = image || site.siteMetadata.ogImage;
  const metaImage = `${site.siteMetadata.siteUrl}${metaImagePath}`;
  const metaUrl = `${site.siteMetadata.siteUrl}${pathname ? pathname : '/'}`;

  return (
    <>
      {/* General Tags */}
      <html lang={lang} />
      <title>
        {title} | {site.siteMetadata.author}
      </title>
      <meta name='description' content={metaDescription} />
      <meta name='image' content={metaImage} />

      {/* OpenGraph tags */}
      <meta property='og:url' content={metaUrl} />
      <meta property='og:type' content={isBlogPost ? 'article' : 'website'} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={metaDescription} />
      <meta property='og:image' content={metaImage} />

      {/* Twitter Card tags */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:creator' content='@finmavis' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={metaDescription} />
      <meta name='twitter:image' content={metaImage} />
    </>
  );
}

SEO.defaultProps = {
  description: ``,
  lang: `en`,
  title: ``,
  isBlogPost: false,
  image: ``,
  pathname: ``,
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  title: PropTypes.string.isRequired,
  isBlogPost: PropTypes.bool,
  image: PropTypes.string,
  pathname: PropTypes.string,
};

export default SEO;
