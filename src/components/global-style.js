import React from 'react';
import { Global, css } from '@emotion/react';
import 'overlayscrollbars';

export default function GlobalStyle(props) {
  return (
    <Global
      styles={css`
        :root {
          --ash: #9ba0ad;
          --alto: #dadada;
          --bone: #f9f9f9;
          --charcoal: #515151;
          --concrete: #f3f3f3;
          --white: #fff;
          --ivory: #fafafa;
          --night: #212121;
          --mine-shaft: #2b2a2a;
          --mine-shaft-light: #393939;
          --cornflower-blue: #5e9bea;
          --ship-gray: #3c3c3e;
          --dusty-gray: #959595;
          --dove-gray: #6b6b6b;
          --border-color: #979797;
          --border-radius: 5px;
          --gallery: #f0f0f0;
        }

        body {
          color: var(--color-secondary);
          background-color: var(--bg-color);
          position: relative;
        }

        main {
          display: block;
          position: relative;
          min-height: 100vh;
          padding-bottom: 4rem;
        }

        body.light-mode {
          --color-primary: var(--charcoal);
          --color-secondary: var(--ash);
          --bg-color: var(--white);
          --bg-color-secondary: var(--bone);
          --bg-card: var(--mine-white);
          --bg-hero: linear-gradient(
            to top,
            rgba(241, 241, 241, 0.81),
            var(--bone) 58%
          );
          --bg-hero-current-work: var(--white);
          --bg-footer: var(--concrete);
          --scrollbar-thumb: var(--alto);
          --scrollbar-track: var(--gallery);
          --bg-fade: linear-gradient(
            to right,
            var(--white) 0,
            rgba(255, 255, 255, 0) 15%,
            rgba(255, 255, 255, 0) 85%,
            var(--white) 100%
          );
        }

        body.dark-mode {
          --color-primary: var(--ivory);
          --color-secondary: var(--ash);
          --bg-color: var(--night);
          --bg-color-secondary: var(--mine-shaft);
          --bg-card: var(--mine-shaft);
          --bg-hero: linear-gradient(
            to bottom,
            var(--mine-shaft) 65%,
            var(--mine-shaft-light) 106%
          );
          --bg-hero-current-work: var(--ship-gray);
          --bg-footer: linear-gradient(
            to top,
            var(--mine-shaft) 106%,
            var(--ship-gray) 65%
          );
          --scrollbar-thumb: var(--dove-gray);
          --scrollbar-track: var(--mine-shaft-light);
          --bg-fade: linear-gradient(
            to right,
            var(--night) 0,
            rgba(33, 33, 33, 0) 15%,
            rgba(33, 33, 33, 0) 85%,
            var(--night) 100%
          );
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          color: var(--color-primary);
        }

        /**
          * Based on copy paste from Dan Abramov blog
          */
        code[class*='language-'],
        pre[class*='language-'] {
          color: #f1faff;
          background: none;
          font-feature-settings: normal;
          text-align: left;
          white-space: pre;
          word-spacing: normal;
          word-break: normal;
          word-wrap: normal;
          line-height: 1.5;
          margin-bottom: 0;
          tab-size: 2;
          hyphens: none;
        }

        /* Code blocks */
        pre[class*='language-'] {
          overflow: auto;
          padding: 0.75rem 1rem;
        }

        pre[class*='language-']::-moz-selection {
          /* Firefox */
          background: hsl(207, 4%, 16%);
        }

        pre[class*='language-']::selection {
          /* Safari */
          background: hsl(207, 4%, 16%);
        }

        /* Text Selection colour */
        pre[class*='language-']::-moz-selection,
        pre[class*='language-'] ::-moz-selection {
          text-shadow: none;
          background: hsla(0, 0%, 100%, 0.15);
        }

        pre[class*='language-']::selection,
        pre[class*='language-'] ::selection {
          text-shadow: none;
          background: hsla(0, 0%, 100%, 0.15);
        }

        /* Inline code */
        :not(pre) > code[class*='language-'] {
          color: #f67280;
          padding: 0.15em 0.2em 0.05em;
          white-space: normal;
        }

        .token.attr-name {
          color: rgb(173, 219, 103);
          font-style: italic;
        }

        .token.comment {
          color: rgb(128, 147, 147);
        }

        .token.string,
        .token.url {
          color: rgb(173, 219, 103);
        }

        .token.variable {
          color: rgb(214, 222, 235);
        }

        .token.number {
          color: rgb(247, 140, 108);
        }

        .token.builtin,
        .token.char,
        .token.constant,
        .token.function {
          color: rgb(130, 170, 255);
        }

        .token.punctuation {
          color: #c792ea;
        }

        .token.selector {
          color: #c792ea;
        }

        .token.doctype {
          color: #6c7b95;
        }

        .token.class-name {
          color: rgb(255, 203, 139);
        }

        .token.tag,
        .token.operator,
        .token.keyword,
        .token.rule {
          color: #00c6b7;
        }

        .token.boolean {
          color: rgb(255, 88, 116);
        }

        .token.property {
          color: #ffce93;
        }

        .token.namespace {
          color: rgb(178, 204, 214);
        }

        pre[data-line] {
          padding: 1em 0 1em 3em;
          position: relative;
        }

        .gatsby-highlight-code-line {
          background-color: hsla(207, 95%, 15%, 1);
          display: block;
          margin-left: -1rem;
          margin-right: -1rem;
          padding-left: 1rem;
          padding-right: 1rem;
        }

        .gatsby-highlight {
          margin-bottom: 1.75rem;
          border-radius: 0.5rem;
          background: #011627;
          overflow: auto;
        }

        .gatsby-highlight pre[class*='language-'] {
          float: left;
          min-width: 100%;
        }

        blockquote {
          color: var(--color-primary);
          margin-left: 0;
          border-left: 0.1rem solid #1ca086;
        }

        /**
         * Override the default overlayscrollbars style
         */
        .os-theme-dark > .os-scrollbar > .os-scrollbar-track,
        .os-theme-light > .os-scrollbar > .os-scrollbar-track {
          background-color: var(--scrollbar-track);
          border-radius: 1rem;
        }

        .os-theme-dark
          > .os-scrollbar
          > .os-scrollbar-track
          > .os-scrollbar-handle {
          background-color: var(--scrollbar-thumb);
          border-radius: 1rem;
        }
      `}
    />
  );
}
