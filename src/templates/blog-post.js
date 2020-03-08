import React from 'react';
import { graphql, Link } from 'gatsby';
import { css } from '@emotion/core';
import {
  TwitterShareButton,
  FacebookShareButton,
  LinkedinShareButton,
} from 'react-share';

import Img from 'gatsby-image';
import SEO from '../components/seo';
import Layout from '../components/layout';
import Container from '../components/container';

import FacebookRoundedIcon from '../shared/assets/svg/facebook-rounded.inline.svg';
import TwitterRoundedIcon from '../shared/assets/svg/twitter-rounded.inline.svg';
import LinkedinRoundedIcon from '../shared/assets/svg/linkedin-rounded.inline.svg';

export default function BlogPost({ data, pageContext, location, navigate }) {
  const { markdownRemark, file } = data;
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
      <SEO
        title={markdownRemark.frontmatter.title}
        description={markdownRemark.frontmatter.description}
        isBlogPost
        image={markdownRemark.frontmatter.banner.childImageSharp.fluid.src}
        pathname={markdownRemark.frontmatter.path}
      />
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
            aria-label='Back to blog list page'
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
                margin: 1rem auto 0.25rem;
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
                <em>
                  Photo by{' '}
                  <a
                    aria-label={`View photo by ${markdownRemark.frontmatter.bannerCreditName} on Unsplash`}
                    href={markdownRemark.frontmatter.bannerCreditLink}
                    target='_blank'
                    rel='noopener noreferrer nofollow'
                  >
                    {markdownRemark.frontmatter.bannerCreditName}
                  </a>
                </em>
              </figcaption>
            </figure>
            <p>
              <em>{markdownRemark.frontmatter.description}</em>
            </p>
            <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
            <div
              css={css`
                text-align: center;
                margin-top: 2.5rem;
                margin-bottom: 1.5rem;
              `}
            >
              <p
                css={css`
                  margin-bottom: 0.75rem;
                `}
              >
                Share this article:
              </p>
              <div
                css={css`
                  display: flex;
                  justify-content: center;

                  &:hover > * {
                    opacity: 0.4;
                  }

                  & > * {
                    cursor: pointer;
                    margin: 0;
                    transition: all 0.2s ease;
                    outline: none;

                    &:hover {
                      opacity: 1;
                    }
                  }

                  svg {
                    height: 2rem;
                  }
                `}
              >
                <FacebookShareButton
                  url={`https://locahost:8000${markdownRemark.frontmatter.path}`}
                >
                  <FacebookRoundedIcon />
                </FacebookShareButton>
                <TwitterShareButton
                  url={`https://locahost:8000${markdownRemark.frontmatter.path}`}
                >
                  <TwitterRoundedIcon />
                </TwitterShareButton>
                <LinkedinShareButton
                  url={`https://locahost:8000${markdownRemark.frontmatter.path}`}
                >
                  <LinkedinRoundedIcon />
                </LinkedinShareButton>
              </div>
            </div>
            <div
              css={css`
                display: flex;
              `}
            >
              {next && (
                <Link
                  aria-label='Navigate to next blog page'
                  to={next.frontmatter.path}
                  css={css`
                    margin-right: auto;
                    text-align: left;
                  `}
                >
                  &larr; {next.frontmatter.title}
                </Link>
              )}
              {previous && (
                <Link
                  aria-label='Navigate to previous blog page'
                  to={previous.frontmatter.path}
                  css={css`
                    margin-left: auto;
                    text-align: right;
                  `}
                >
                  {previous.frontmatter.title} &rarr;
                </Link>
              )}
            </div>
            <hr
              css={css`
                background: var(--border-color);
                margin-top: 1.5rem;
                margin-bottom: 1.5rem;
              `}
            />
            <div
              css={css`
                display: flex;
                align-items: center;
                margin-bottom: 1.5rem;
              `}
            >
              <div
                css={css`
                  width: 3rem;
                  margin-right: 0.75rem;
                `}
              >
                <Img
                  fluid={file.childImageSharp.fluid}
                  alt='Fin Mavis Photo'
                  css={css`
                    border-radius: 50%;
                    width: 100%;
                  `}
                />
              </div>
              <div
                css={css`
                  p {
                    margin-bottom: 0;
                    color: var(--color-primary);
                  }
                `}
              >
                <p>
                  <em>
                    Personal notes by{' '}
                    <a
                      href='https://twitter.com/finmavis'
                      target='_blank'
                      rel='noopener noreferrer nofollow'
                      aria-label='Visit Fin Mavis twitter'
                    >
                      Fin Mavis
                    </a>
                    .
                  </em>
                </p>
                <p>
                  <em>As a reminder to my future self while learning.</em>
                </p>
              </div>
            </div>
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
        path
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
        description
      }
      html
    }
    file(relativePath: { eq: "profile.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 60) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
