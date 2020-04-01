import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { css } from '@emotion/core';

import Img from 'gatsby-image';
import Container from './ui/container';
import HeadingSection from './ui/heading-section';
import Card from './ui/card';

export default function BlogPreview() {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 3
      ) {
        edges {
          node {
            id
            excerpt(pruneLength: 120)
            timeToRead
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              path
              title
              banner {
                childImageSharp {
                  fluid(maxWidth: 415) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
              bannerCreditName
            }
          }
        }
      }
    }
  `);

  return (
    <section
      css={css`
        padding-top: 2rem;
        padding-bottom: 4rem;
      `}
    >
      <Container sizes='large'>
        <HeadingSection>Latest Blog</HeadingSection>
        <div
          css={css`
            display: flex;
            flex-wrap: wrap;
            margin-left: -0.5rem;
            margin-right: -0.5rem;
          `}
        >
          {allMarkdownRemark.edges.map(({ node }) => (
            <div
              key={node.id}
              css={css`
                margin-bottom: 2rem;
                padding-left: 0.5rem;
                padding-right: 0.5rem;
                flex: 0 0 100%;
                max-width: 100%;

                @media (min-width: 600px) {
                  flex: 0 0 calc(100% / 2);
                  max-width: calc(100% / 2);
                }

                @media (min-width: 900px) {
                  flex: 0 0 calc(100% / 3);
                  max-width: calc(100% / 3);
                }
              `}
            >
              <Card>
                <div
                  css={css`
                    max-height: 10rem;
                  `}
                >
                  <Link
                    to={node.frontmatter.path}
                    aria-label={node.frontmatter.title}
                  >
                    <Img
                      fluid={node.frontmatter.banner.childImageSharp.fluid}
                      alt={node.frontmatter.title}
                      css={css`
                        max-height: 10rem;
                      `}
                    />
                  </Link>
                </div>
                <div
                  css={css`
                    padding: 0 1rem 1rem;
                    color: var(--color-primary);
                    font-size: 0.9rem;
                  `}
                >
                  <Link
                    to={node.frontmatter.path}
                    aria-label={node.frontmatter.title}
                  >
                    <h4
                      css={css`
                        margin: 1rem 0 0;
                      `}
                    >
                      {node.frontmatter.title.substring(0, 20)}...
                    </h4>
                  </Link>
                  <p
                    css={css`
                      margin-bottom: 0.75rem;
                    `}
                  >
                    <small>
                      {node.frontmatter.date} • {node.timeToRead} min read
                    </small>
                  </p>
                  <p>{node.excerpt}</p>
                  <Link
                    css={css`
                      color: var(--cornflower-blue);
                    `}
                    to={node.frontmatter.path}
                    aria-label={node.frontmatter.title}
                  >
                    Read &rarr;
                  </Link>
                </div>
              </Card>
            </div>
          ))}
        </div>
        <div
          css={css`
            display: flex;
            justify-content: center;
          `}
        >
          <Link
            aria-label='Go to blog page to see more article'
            to='/blog/'
            css={css`
              padding: 0.5rem 2rem;
              border-radius: 10rem;
              color: var(--white);
              box-shadow: 0 3px 10px 2px rgba(56, 183, 233, 0.5);
              background-image: linear-gradient(
                to bottom,
                #00c3ff 0%,
                #40b5e5 93%
              );
              transition: all 0.25s ease-out;
              white-space: nowrap;
              text-overflow: ellipsis;

              &:hover {
                background-image: linear-gradient(
                  to bottom,
                  #00c3ff 0%,
                  #40b5e5 93%
                );
                transform: translateY(-4px);
              }

              &:focus {
                transform: translateY(2px);
              }
            `}
          >
            See more article
          </Link>
        </div>
      </Container>
    </section>
  );
}
