import React from 'react';
import { graphql, Link } from 'gatsby';
import { css } from '@emotion/core';

import Img from 'gatsby-image';
import Layout from '../components/layout';
import Container from '../components/container';

export default function BlogPost({ data, pageContext, location, navigate }) {
  const { markdownRemark } = data;
  const { previous, next } = pageContext;

  const onGoBack = () => {
    if (document.referrer.indexOf(location.host) !== -1) {
      window.history.back();
    } else {
      navigate('/blog/');
    }
  };

  return (
    <Layout>
      <Container
        css={css`
          max-width: 800px;
        `}
      >
        <section
          css={css`
            display: block;
            padding-top: 3.5rem;
            color: var(--color-primary);
          `}
        >
          <button
            onClick={onGoBack}
            css={css`
              background: none;
              cursor: pointer;
              border: 0;
              color: var(--cornflower-blue);
              padding: 0;
              margin-top: 2.5rem;

              @media (max-width: 900px) {
                margin-top: 1rem;
              }
            `}
          >
            &larr; Back to list
          </button>
          <article>
            <h1
              css={css`
                color: var(--color-primary);
                text-align: center;
                margin: 1rem auto 0;
              `}
            >
              {markdownRemark.frontmatter.title}
            </h1>
            <p
              css={css`
                text-align: center;
              `}
            >
              <small>
                {markdownRemark.frontmatter.date} • {markdownRemark.timeToRead}{' '}
                min read
              </small>
            </p>
            <figure>
              <Img
                fluid={markdownRemark.frontmatter.banner.childImageSharp.fluid}
                alt={markdownRemark.frontmatter.bannerCredit}
                css={css`
                  max-height: 20rem;
                `}
              />
              <figcaption
                css={css`
                  text-align: center;
                  margin-top: 0.3rem;
                `}
              >
                Photo by{' '}
                <a
                  href={markdownRemark.frontmatter.bannerCreditLink}
                  target='_blank'
                  rel='noopener noreferrer nofollow'
                >
                  {markdownRemark.frontmatter.bannerCreditName}
                </a>
              </figcaption>
            </figure>
            <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
            {previous && (
              <Link to={previous.frontmatter.path}>&larr; Previous</Link>
            )}
            {next && <Link to={next.frontmatter.path}>Next &rarr;</Link>}
          </article>
        </section>
      </Container>
    </Layout>
  );
}

export const query = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      timeToRead
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        banner {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        bannerCreditName
        bannerCreditLink
      }
      html
    }
  }
`;
