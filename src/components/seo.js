/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

function SEO({ description, lang, title, isBlogPost, image }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            canonicalUrl
            image
          }
        }
      }
    `,
  );

  const metaDescription = description || site.siteMetadata.description;
  const metaImage = image || site.siteMetadata.image;

  return (
    <Helmet>
      {/* General Tags */}
      <html lang={lang} />
      <title>{title}</title>
      <meta name='description' content={metaDescription} />
      <meta
        name='image'
        content={`${site.siteMetadata.canonicalUrl}${metaImage}`}
      />

      {/* OpenGraph tags */}
      <meta property='og:url' content={site.siteMetadata.canonicalUrl} />
      <meta property='og:type' content={isBlogPost ? 'article' : 'website'} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={metaDescription} />
      <meta
        property='og:image'
        content={`${site.siteMetadata.canonicalUrl}${metaImage}`}
      />

      {/* Twitter Card tags */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:creator' content='@finmavis' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={metaDescription} />
      <meta
        name='twitter:image'
        content={`${site.siteMetadata.canonicalUrl}${metaImage}`}
      />
    </Helmet>
  );
}

SEO.defaultProps = {
  lang: `en`,
  description: ``,
  isBlogPost: false,
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  title: PropTypes.string.isRequired,
  isBlogPost: PropTypes.bool,
};

export default SEO;
