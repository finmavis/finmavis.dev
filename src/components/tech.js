import React from 'react';
import { css, keyframes } from '@emotion/react';

import AngularIcon from 'src/shared/assets/svg/angular.svg';
import ApolloIcon from 'src/shared/assets/svg/apollo.inline.svg';
import BabelIcon from 'src/shared/assets/svg/babel.svg';
import CssIcon from 'src/shared/assets/svg/css.svg';
import GatsbyIcon from 'src/shared/assets/svg/gatsby.inline.svg';
import GraphQLIcon from 'src/shared/assets/svg/graphql.svg';
import HtmlIcon from 'src/shared/assets/svg/html.svg';
import JsIcon from 'src/shared/assets/svg/javascript.svg';
import JestIcon from 'src/shared/assets/svg/jest.svg';
import NodejsIcon from 'src/shared/assets/svg/nodejs.inline.svg';
import ParcelIcon from 'src/shared/assets/svg/parceljs.svg';
import ReactIcon from 'src/shared/assets/svg/reactjs.svg';
import ReduxIcon from 'src/shared/assets/svg/redux.inline.svg';
import SassIcon from 'src/shared/assets/svg/sass.svg';
import TsIcon from 'src/shared/assets/svg/typescript.svg';
import WebpackIcon from 'src/shared/assets/svg/webpack.inline.svg';
import Container from './ui/container';
import HeadingSection from './ui/heading-section';

const slide1 = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-20rem, 0, 0);
  }
`;

const slide2 = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-24rem, 0, 0);
  }
`;

const slide3 = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-28rem, 0, 0);
  }
`;

const slide4 = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-32rem, 0, 0);
  }
`;

const slide5 = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-36rem, 0, 0);
  }
`;

const slide6 = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-40rem, 0, 0);
  }
`;

const slide7 = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-44rem, 0, 0);
  }
`;

const slide8 = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-48rem, 0, 0);
  }
`;

const slide9 = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-52rem, 0, 0);
  }
`;

const slide10 = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-55rem, 0, 0);
  }
`;

export default function Tech(props) {
  return (
    <section
      css={css`
        padding-top: 2rem;
        padding-bottom: 4rem;
      `}
    >
      <Container sizes='large'>
        <HeadingSection>Technologies</HeadingSection>
        <div
          css={css`
            overflow: hidden;
            position: relative;

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
              background: var(--bg-fade);
              height: 100%;
              left: 0;
              position: absolute;
              top: 0;
              width: 100%;
              z-index: 1;
            `}
          ></div>
          <div
            css={css`
              display: flex;
              justify-content: space-around;
              margin-bottom: 1rem;
              width: 71.75rem;
              animation: ${slide1} 15s linear alternate both infinite;

              @media (max-width: 1100px) {
                animation: ${slide2} 15s linear alternate both infinite;
              }

              @media (max-width: 1000px) {
                animation: ${slide3} 15s linear alternate both infinite;
              }

              @media (max-width: 900px) {
                animation: ${slide4} 15s linear alternate both infinite;
              }

              @media (max-width: 800px) {
                animation: ${slide5} 15s linear alternate both infinite;
              }

              @media (max-width: 700px) {
                animation: ${slide6} 15s linear alternate both infinite;
              }

              @media (max-width: 600px) {
                animation: ${slide7} 25s linear alternate both infinite;
              }

              @media (max-width: 500px) {
                animation: ${slide8} 25s linear alternate both infinite;
              }

              @media (max-width: 400px) {
                animation: ${slide9} 25s linear alternate both infinite;
              }

              @media (max-width: 340px) {
                animation: ${slide10} 25s linear alternate both infinite;
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
              animation: ${slide1} 15s linear alternate-reverse both infinite;

              @media (max-width: 1100px) {
                animation: ${slide2} 15s linear alternate-reverse both infinite;
              }

              @media (max-width: 1000px) {
                animation: ${slide3} 15s linear alternate-reverse both infinite;
              }

              @media (max-width: 900px) {
                animation: ${slide4} 15s linear alternate-reverse both infinite;
              }

              @media (max-width: 800px) {
                animation: ${slide5} 15s linear alternate-reverse both infinite;
              }

              @media (max-width: 700px) {
                animation: ${slide6} 15s linear alternate-reverse both infinite;
              }

              @media (max-width: 600px) {
                animation: ${slide7} 25s linear alternate-reverse both infinite;
              }

              @media (max-width: 500px) {
                animation: ${slide8} 25s linear alternate-reverse both infinite;
              }

              @media (max-width: 400px) {
                animation: ${slide9} 25s linear alternate-reverse both infinite;
              }

              @media (max-width: 340px) {
                animation: ${slide10} 25s linear alternate-reverse both infinite;
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
    </section>
  );
}
