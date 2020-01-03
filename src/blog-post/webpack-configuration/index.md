---
path: '/blog/webpack-configuration-step-by-step'
title: 'Webpack Configuration step by step - Development to Production'
date: '2019-10-15'
author: 'Fin Mavis'
tags:
  ['JavaScript', 'Webpack', 'BabelJS', 'SASS', 'SCSS', 'Autoprefix', 'Bundler']
description: 'Learn how to configure webpack from Development to Production with some practical best pratices and optimization.'
banner: './images/adi-goldstein.jpg'
bannerCreditName: 'Adi Goldstein'
bannerCreditLink: 'https://unsplash.com/photos/mDinBvq1Sfg'
---

Hello World!

This is my first ever article, and we're gonna learn how to configure **webpack** step by step for JavaScript development. In this guide, not only for development, but we'll also cover configure **webpack** for Production, because for Production, it is a best practices to optimize all our code and assets.

## Getting Started

First, we need to create our webpack project. Create a new folder, and i'll pick a folder name **webpack-boilerplate**. Inside that folder initialize our project with `npm init` or `yarn init`. Once we done, inside our project directory will have `package.json`.

After that, we need to create a **config** and **src** folder. Inside a **config** folder, create `webpack.config.js` file. Inside **src** folder create two file, `index.html` and `index.js`, it is entry point of our web application project.

Now, our project structure would be like below:

```text
|-- config
    |-- webpack.config.js
|-- src
    |-- index.html
    |-- index.js
|-- package.json
```
