import React from 'react';
import { Global, css } from '@emotion/core';

export default function GlobalStyle(props) {
  return (
    <Global
      styles={css`
        :root {
          --ash: #9ba0ad;
          --bone: #f9f9f9;
          --charcoal: #515151;
          --concrete: #f3f3f3;
          --white: #fff;
          --ivory: #fafafa;
          --night: #212121;
          --ship-gray: #3c3c3e;
          --mine-shaft: #2b2a2a;
          --cornflower-blue: #5e9bea;
          --dusty-gray: #959595;
          --border-color: #979797;
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
          --bg-hero: linear-gradient(
            to top,
            rgba(241, 241, 241, 0.81),
            var(--bone) 58%
          );
          --bg-current-work: var(--white);
          --bg-footer: var(--concrete);
          --bg-experience: var(--bone);
          --bg-blog-list: var(--mine-white);
        }

        body.dark-mode {
          --color-primary: var(--ivory);
          --color-secondary: var(--ash);
          --bg-color: var(--night);
          --bg-hero: linear-gradient(to bottom, #2b2a2a 65%, #393939 106%);
          --bg-current-work: var(--ship-gray);
          --bg-footer: linear-gradient(to top, #2b2a2a 106%, #3c3c3e 65%);
          --bg-experience: var(--mine-shaft);
          --bg-blog-list: var(--mine-shaft);
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
          border-left: 0.1rem solid #1ca086;
        }
      `}
    />
  );
}
