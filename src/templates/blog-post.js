import React from 'react';
import { graphql, Link } from 'gatsby';
import { css } from '@emotion/react';
import { getSrc, GatsbyImage } from 'gatsby-plugin-image';

import SEO from 'src/components/seo';
import Layout from 'src/components/layout';
import Container from 'src/components/ui/container';
import Share from 'src/components/share';

export default function BlogPost({ data, pageContext }) {
  const { site, markdownRemark, file } = data;
  const { previous, next } = pageContext;

  return (
    <Layout>
      <SEO
        title={markdownRemark.frontmatter.title}
        description={markdownRemark.frontmatter.description}
        isBlogPost
        image={getSrc(markdownRemark.frontmatter.banner)}
        pathname={markdownRemark.frontmatter.path}
      />
      <Container sizes='small'>
        <section
          css={css`
            display: block;
            padding-top: 3.5rem;
            color: var(--color-primary);
          `}
        >
          <Link
            aria-label='Back to blog list page'
            to='/blog/'
            css={css`
              display: inline-block;
              margin-top: 2.5rem;

              @media (max-width: 900px) {
                margin-top: 1rem;
              }
            `}
          >
            &larr; Back to list
          </Link>
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
              <GatsbyImage
                image={
                  markdownRemark.frontmatter.banner.childImageSharp
                    .gatsbyImageData
                }
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
            <Share
              url={`${site.siteMetadata.siteUrl}${markdownRemark.frontmatter.path}`}
            />
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
                    box-shadow: none;
                    text-decoration: underline;
                    flex-basis: 48.5%;
                    max-width: 48.5%;
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
                    box-shadow: none;
                    text-decoration: underline;
                    flex-basis: 48.5%;
                    max-width: 48.5%;
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
                <GatsbyImage
                  image={file.childImageSharp.gatsbyImageData}
                  alt={`${site.siteMetadata.author} Photo`}
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
                      href={site.siteMetadata.social.twitter}
                      target='_blank'
                      rel='noopener noreferrer nofollow'
                      aria-label={`Visit ${site.siteMetadata.author} twitter`}
                    >
                      {site.siteMetadata.author}
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
  query ($path: String!) {
    site {
      siteMetadata {
        siteUrl
        author
        social {
          twitter
        }
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      timeToRead
      frontmatter {
        path
        date(formatString: "MMMM DD, YYYY")
        title
        banner {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, width: 800)
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
        gatsbyImageData(layout: CONSTRAINED, width: 60)
      }
    }
  }
`;
