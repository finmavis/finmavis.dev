import React from 'react';
import { css, keyframes } from '@emotion/core';

import Container from './container';
import HeadingSection from './heading-section';

import AngularIcon from '../assets/svg/angular.svg';
import ApolloIcon from '../assets/svg/apollo.inline.svg';
import BabelIcon from '../assets/svg/babel.svg';
import CssIcon from '../assets/svg/css.svg';
import GatsbyIcon from '../assets/svg/gatsby.inline.svg';
import GraphQLIcon from '../assets/svg/graphql.svg';
import HtmlIcon from '../assets/svg/html.svg';
import JsIcon from '../assets/svg/javascript.svg';
import JestIcon from '../assets/svg/jest.svg';
import NodejsIcon from '../assets/svg/nodejs.inline.svg';
import ParcelIcon from '../assets/svg/parceljs.svg';
import ReactIcon from '../assets/svg/reactjs.svg';
import ReduxIcon from '../assets/svg/redux.inline.svg';
import SassIcon from '../assets/svg/sass.svg';
import TsIcon from '../assets/svg/typescript.svg';
import WebpackIcon from '../assets/svg/webpack.inline.svg';

const slide = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-28rem, 0, 0);
  }
`;

const slide1 = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-31rem, 0, 0);
  }
`;

const slide2 = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-34rem, 0, 0);
  }
`;

const slide3 = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-40rem, 0, 0);
  }
`;

const slide4 = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-45rem, 0, 0);
  }
`;

const slide5 = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-50rem, 0, 0);
  }
`;

const slide6 = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-52rem, 0, 0);
  }
`;

export default function Tech() {
  return (
    <div
      css={css`
        padding-top: 2rem;
        padding-bottom: 4rem;
      `}
    >
      <Container>
        <HeadingSection>Technologies</HeadingSection>
        <div
          css={css`
            overflow: hidden;

            & > * {
              margin: 0;
            }

            svg {
              height: 3rem;

              .icon-label {
                fill: var(--color-primary);
              }
            }

            img {
              display: inline-block;
              height: 3rem;
            }
          `}
        >
          <div
            css={css`
              display: flex;
              justify-content: space-around;
              margin-bottom: 2rem;
              width: 71.75rem;
              animation: ${slide} 30s linear alternate both infinite;

              @media (max-width: 900px) {
                animation: ${slide1} 30s linear alternate both infinite;
              }

              @media (max-width: 800px) {
                animation: ${slide2} 30s linear alternate both infinite;
              }

              @media (max-width: 700px) {
                animation: ${slide3} 30s linear alternate both infinite;
              }

              @media (max-width: 600px) {
                animation: ${slide4} 30s linear alternate both infinite;
              }

              @media (max-width: 500px) {
                animation: ${slide5} 30s linear alternate both infinite;
              }

              @media (max-width: 400px) {
                animation: ${slide6} 30s linear alternate both infinite;
              }

              & > * {
                flex-shrink: 0;
              }
            `}
          >
            <img src={HtmlIcon} alt='HTML5' />
            <img src={CssIcon} alt='CSS3' />
            <img src={BabelIcon} alt='Babel' />
            <WebpackIcon />
            <img src={JestIcon} alt='Jest' />
            <ReduxIcon />
            <ApolloIcon />
            <img src={AngularIcon} alt='Angular' />
          </div>
          <div
            css={css`
              display: flex;
              justify-content: space-around;
              width: 71.75rem;
              animation: ${slide} 30s linear alternate-reverse both infinite;

              @media (max-width: 900px) {
                animation: ${slide1} 30s linear alternate-reverse both infinite;
              }

              @media (max-width: 800px) {
                animation: ${slide2} 30s linear alternate-reverse both infinite;
              }

              @media (max-width: 700px) {
                animation: ${slide3} 30s linear alternate-reverse both infinite;
              }

              @media (max-width: 600px) {
                animation: ${slide4} 30s linear alternate-reverse both infinite;
              }

              @media (max-width: 500px) {
                animation: ${slide5} 30s linear alternate-reverse both infinite;
              }

              @media (max-width: 400px) {
                animation: ${slide6} 30s linear alternate-reverse both infinite;
              }
            `}
          >
            <img src={TsIcon} alt='Typescript' />
            <img src={JsIcon} alt='Javascript' />
            <img src={ParcelIcon} alt='ParcelJS' />
            <GatsbyIcon />
            <img src={ReactIcon} alt='ReactJS' />
            <img src={GraphQLIcon} alt='GraphlQL' />
            <img src={SassIcon} alt='SASS' />
            <NodejsIcon />
          </div>
        </div>
      </Container>
    </div>
  );
}
