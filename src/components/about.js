import React from 'react';
import { css } from '@emotion/core';
import { Link, useStaticQuery, graphql } from 'gatsby';

import Img from 'gatsby-image';
import Container from './container';

import EmailIcon from '../assets/svg/email.inline.svg';
import LocationIcon from '../assets/svg/location.inline.svg';

export default function About() {
  const data = useStaticQuery(graphql`
    query {
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
            <h2
              css={css`
                color: var(--color-primary);
              `}
            >
              About Me
            </h2>
            <p>
              I’m Aris Rinardi, also known as Fin Mavis. I’m a self-taught
              Frontend Developer based in Jakarta. I’m really interested in
              technology &amp; solving technical problems. You can know more
              about me by reading my <Link to='/blog/'>articles</Link>.
            </p>
            <p
              css={css`
                margin-bottom: 0.5rem;
              `}
            >
              For business inquiries feel free to contact me at:
            </p>
            <address>
              <div
                css={css`
                  margin-bottom: 0.25rem;

                  a {
                    color: var(--color-primary);
                  }
                `}
              >
                <EmailIcon
                  css={css`
                    fill: var(--color-primary);
                    margin-right: 0.25rem;
                    height: 0.65rem;
                  `}
                />{' '}
                <a href='mailto:fin.mavis@yahoo.com'>fin.mavis@yahoo.com</a>
              </div>
              <div>
                <LocationIcon
                  css={css`
                    fill: var(--color-primary);
                    margin-right: 0.25rem;
                    height: 1rem;
                  `}
                />{' '}
                Jakarta, Indonesia
              </div>
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
              alt='Fin Mavis'
              css={css`
                border-radius: 50%;
                width: 100%;
              `}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
