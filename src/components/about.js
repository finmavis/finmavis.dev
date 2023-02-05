import React from 'react';
import { css } from '@emotion/core';
import { Link, useStaticQuery, graphql } from 'gatsby';

import Img from 'gatsby-image';
import Container from './ui/container';

import EmailIcon from '../shared/assets/svg/email.inline.svg';
import LocationIcon from '../shared/assets/svg/location.inline.svg';

import { SOCIAL_LINK } from '../shared/constants/social-link.constant';

export default function About(props) {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          name
          author
          email
        }
      }
      file(relativePath: { eq: "profile.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <section
      css={css`
        padding-top: 3.5rem;
        display: block;

        @media (max-width: 900px) {
          padding-top: 2rem;
        }
      `}
    >
      <Container>
        <div
          css={css`
            display: flex;

            @media (max-width: 700px) {
              flex-wrap: wrap;
            }
          `}
        >
          <div
            css={css`
              font-family: inherit;
              color: var(--color-primary);

              @media (min-width: 700px) {
                padding-right: 2rem;
              }

              @media (min-width: 900px) {
                padding-right: 3.5rem;
              }
            `}
          >
            <h2>About Me</h2>
            <p>
              Hi! My name is {data.site.siteMetadata.name}, also known as{' '}
              {data.site.siteMetadata.author}. I’m a Frontend Developer based in
              Jakarta. Currently, I'm working as a Frontend Engineer at Xendit.
            </p>
            <p>
              Tech enthusiast, conscientious &amp; relentless on solving
              technical problems. You can find out more about me by reading my{' '}
              <Link aria-label='Go to blog page' to='/blog/'>
                articles
              </Link>
              .
            </p>
            <p
              css={css`
                margin-bottom: 0.5rem;
              `}
            >
              For business inquiries feel free to contact me at:
            </p>
            <address>
              <ul
                css={css`
                  margin-bottom: 0.25rem;
                  margin-left: 0;

                  a {
                    color: var(--color-primary);
                  }

                  li {
                    list-style: none;
                  }
                `}
              >
                <li>
                  <EmailIcon
                    css={css`
                      fill: var(--color-primary);
                      margin-right: 0.25rem;
                      height: 0.65rem;
                    `}
                  />{' '}
                  <a href={`mailto:${data.site.siteMetadata.email}`}>
                    {data.site.siteMetadata.email}
                  </a>
                </li>
                <li>
                  <LocationIcon
                    css={css`
                      fill: var(--color-primary);
                      margin-right: 0.25rem;
                      height: 1rem;
                    `}
                  />{' '}
                  Jakarta, Indonesia
                </li>
              </ul>
            </address>
          </div>
          <div
            css={css`
              flex: 0 0 15rem;
              max-width: 15rem;
              margin-top: 2.175rem;

              @media (max-width: 700px) {
                margin-left: auto;
                margin-right: auto;
                flex-basis: 12.5rem;
              }
            `}
          >
            <Img
              fluid={data.file.childImageSharp.fluid}
              alt={`${data.site.siteMetadata.author} Photo`}
              css={css`
                border-radius: 50%;
                width: 100%;
              `}
            />
          </div>
        </div>
        <div>
          <h3>Or somewhere else on the web</h3>
          <ul
            css={css`
              display: flex;
              flex-wrap: wrap;
              justify-content: space-between;
              color: var(--color-primary);
              padding-top: 0.5rem;
              margin-bottom: 2rem;
              margin-left: 0;
            `}
          >
            {SOCIAL_LINK.map((item) => (
              <li
                key={item.name}
                css={css`
                  flex: 0 0 100%;
                  max-width: 100%;
                  margin-bottom: 1rem;
                  list-style: none;

                  @media (min-width: 300px) {
                    flex: 0 0 calc(100% / 2);
                    max-width: calc(100 / 2);
                  }

                  @media (min-width: 700px) {
                    flex: 0 0 calc(100% / 4);
                    max-width: calc(100% / 4);
                  }
                `}
              >
                <a
                  aria-label={item.ariaLabel}
                  href={item.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  css={css`
                    color: var(--color-primary);
                    display: inline-block;
                    box-shadow: none;

                    svg {
                      height: 1rem;
                      fill: var(--color-primary);
                      margin-right: 0.25rem;
                    }
                  `}
                >
                  {item.icon} {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
