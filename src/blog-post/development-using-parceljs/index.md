---
path: '/blog/development-using-parceljs'
title: 'Development using ParcelJS'
date: '2019-11-25'
author: 'Fin Mavis'
tags:
  [
    'JavaScript',
    'ParcelJS',
    'Bundler',
    'Parcel',
    'ES6',
    'TypeScript',
    'SASS',
    'SCSS',
    'Autoprefix',
    'postcss-preset-env',
    'React',
    'Preact',
    'Vue',
    'Svelte',
  ]
description: 'Learn step by step how to config and use ParcelJS for JavaScript development.'
banner: './images/kira-auf-der-heide-IPx7J1n_xUc-unsplash.jpg'
bannerCreditName: 'Kira auf der Heide'
bannerCreditLink: 'https://unsplash.com/photos/IPx7J1n_xUc'
---

## What is ParcelJS ?

According to the tag line on their home page, [Parcel](https://parceljs.org/) is a "Blazing fast, zero-configuration web application bundler". But in my opinion Parcel is a bundler that amazingly super simple to use, it's like magic. But, what do i mean by Magic ? Because Parcel will bundle all of our code like HTML, CSS, SASS, JavaScript, TypeScript without the complex of configuration stuff, so we can focus more on developing our apps instead of configure it.

## Getting Started

First, we need to create our Project. Create a new folder, and i'll pick a folder name `parcel-boilerplate`. Inside that folder initialize our project with `npm init` or `yarn init`. Once we done, inside our project directory will have `package.json`.

## Install ParcelJS

We can now install ParcelJS, along with our other dependencies. Run the following to install Parcel:

If you're using `yarn`

```bash
yarn add --dev parcel-bundler
```

If you're using `npm`

```bash
npm install --save-dev parcel-bundler
```

Once we done, we can move on to adding some basic code to get our app started.

## The Code

Parcel can take any type of file as an entry point, but an HTML or JavaScript file is a good place to start. If we link our main JavaScript file in the HTML using a relative path, Parcel will also process it for us, and replace the reference with a URL to the output file. So, let's create our HTML and JavaScript file. Create a `src` folder inside our project directory and create two file inside that directory, `index.html` and `index.js`. And our Project structure look like below:

```text
|-- src
    |-- index.html
    |-- index.js
|-- package.json
```

Add the following to `index.html`:

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />

    <title>Parcel Boilerplate</title>
  </head>
  <body>
    <h1>Parcel Boilerplate</h1>

    <script src="./index.js"></script>
  </body>
</html>
```

And then add the following to `index.js`:

```js
// index.js
function HelloWorld() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('Hello World'), 1000);
  });
}

HelloWorld().then(value => console.log(value));
```

Open `package.json` and add new scripts for starting our parcel:

```json
// package.json
"scripts": {
  "start": "parcel ./src/index.html --open",
  "build": "parcel build ./src/index.html"
},
```

With these commands we can start our development mode using `yarn start` or `npm run start` and have it open in the browser automatically, and we can using `yarn build` or `npm run build` to build our app for production.

Ok, understood. But, what if i want to use `async await` ? First, we need to install another package.

If you're using `yarn`

```bash
yarn add @babel/runtime

yarn add --dev @babel/core @babel/plugin-transform-runtime
```

If you're using `npm`

```bash
npm install --save @babel/runtime

npm install --save-dev @babel/core @babel/plugin-transform-runtime
```

Next, we need to create `.babelrc` file in the root of our project folder so that we can start using our `babel plugins` that just we installed.

```json
// .babelrc
{
  "plugins": ["@babel/plugin-transform-runtime"]
}
```

And then, we need to set browserlist that we want to support in `package.json`. Note: you can check browserlist [Here](https://browserl.ist/).

In this case we will use this configuration:

```json
// package.json
"browserslist": [
  ">0.2%",
  "not dead",
  "not op_mini all"
],
```

Now update our index.js to using `async await`:

```js
// index.js
function HelloWorld() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('Hello World'), 1000);
  });
}

async function print() {
  const result = await HelloWorld();
  console.log(result);
}

print();
```

Oh wait, that's really easy, what about `dynamic import` for `code splitting` ? We can do that too. Let's update our code, extract `HelloWorld` function to it's own file then import it from `index.js`

```js
// index.js
async function print() {
  /**
   * Notice that in here we are using dynamic import hello-world.js
   */
  const { HelloWorld } = await import('./hello-world');
  const result = await HelloWorld();
  console.log(result);
}

print();

// hello-world.js
export function HelloWorld() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('Hello World'), 1000);
  });
}
```

Dang! ParcelJS is so easy to use! What about others feature like `Optional Chaining`, `Nullish Coalescing Operator` or `Proposal Class Properties` ? We can do it too by installing all `babel plugins` that we need. You can check [Here](https://github.com/babel/babel/tree/master/packages) to see all the `babel plugins`.

## Add Style to Project

There are two ways to adding style to the project. First we directly include in our HTML template, second import it on our JavaScript file.

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />

    <title>Parcel Boilerplate</title>

    <!-- We reference the style in here just as usual -->
    <link rel="stylesheet" href="./style.css" />
  </head>
  <body>
    <h1>Parcel Boilerplate</h1>

    <script src="./index.js"></script>
  </body>
</html>
```

```js
// index.js
import './style.css'; // Or we can import it on our JavaScript File

async function print() {
  const { HelloWorld } = await import('./hello-world');
  const result = await HelloWorld();
  console.log(result);
}

print();
```

What about `SASS/SCSS` ? First we need to install `sass`:

if you're using `yarn`:

```bash
yarn add --dev sass
```

If you're using `npm`:

```bash
npm install --save-dev sass
```

Then just like above, we can include directly on HTML or import from our JavaScript file.

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />

    <title>Parcel Boilerplate</title>

    <!-- Look, We reference the sass/scss in here just as usual -->
    <link rel="stylesheet" href="./style.scss" />
  </head>
  <body>
    <h1>Parcel Boilerplate</h1>

    <script src="./index.js"></script>
  </body>
</html>
```

```js
// index.js
import './style.scss'; // Or we can import it on our JavaScript File

async function print() {
  const { HelloWorld } = await import('./hello-world');
  const result = await HelloWorld();
  console.log(result);
}

print();
```

That's really nice, what if we want to write `css` without to worry about vendor prefixes or want to use CSS modern and future syntax ? We can also add that to our project using `postcss-preset-env`.

But, What is it ? What is `postcss-preset-env` ? Basically, it’s like `Babel` for CSS. It allows us to write CSS using modern and future syntax and transpiles that code to CSS which is widely supported by most browsers.

For example, we want to use `Nesting Rules` in our `css`, but if we take look at [cssdb](https://cssdb.org/), it still on Stage 1, so basically we can't use it. But with the help of `postcss-preset-env` we can start using it. Yeaaaayyy!!!

And for vendor prefixes, `postcss-preset-env` by default includes `autoprefixer` with `autoprefixer` options.

Let's get our hand dirty then.

If you're using `yarn`

```bash
yarn add --dev postcss-flexbugs-fixes postcss-preset-env
```

If you're using `npm`

```bash
npm install --save-dev postcss-flexbugs-fixes postcss-preset-env
```

After we install it, create `postcss.config.js` in our root project directory. And code like below:

```js
// postcss.config.js
module.exports = {
  plugins: [
    /**
     * We use postcss-flexbugs-fixes to solve some Flexbox issues
     * read more on https://github.com/luisrudge/postcss-flexbugs-fixes
     */
    require('postcss-flexbugs-fixes'),
    /**
     * Then on this line we start using postcss-preset-env
     * read more on https://github.com/csstools/postcss-preset-env
     */
    require('postcss-preset-env')({
      stage: 2,
      features: {
        'nesting-rules': true,
      },
      autoprefixer: {
        flexbox: 'no-2009',
      },
    }),
  ],
};
```

Let's start use `nesting-rules` in our `css`. Don't forget to include our css in our HTML.

```css
/* style.css */
html {
  font-size: 62.5%;
  box-sizing: border-box;
}

body {
  font-size: 1.6rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;

  /* Look, we using nested rules here */
  & h1 {
    font-size: 3rem;
  }
}
```

What about other features ? You can check [here](https://github.com/csstools/postcss-preset-env) for more information about `postcss-preset-env`.

## Cleanup every time build for Production

One thing you will notice that every time we start using our `build` scripts, it will generate our compiled code into `dist` folder. The old compiled code still there. Let's clean that up every time we compiled our code. We are going to use `parcel-plugin-clean-dist`.

If you're using `yarn`

```bash
yarn add --dev parcel-plugin-clean-dist
```

If you're using `npm`

```bash
npm install --save-dev parcel-plugin-clean-dist
```

And that's it. Every time we build for Production it will automatically delete old files for us.

## TypeScript

Ok, so far we understand fundamentally how to use ParcelJS. What about we want to use TypeScript for our development ? With ParcelJS it is piece a cake. All we have to do is update all our `.js` file into `.ts`. After that update our script file on HTML into `index.ts`. Also since `.babelrc` is no longer needed when we using TypeScript, we can delete that file. And then we can cleanup our dependencies, because when we using TypeScript the only needed dependencies is `typescript`. Let's clean up our dependencies.

If you're using `yarn`

```bash
# note: only do this if you're using TypeScript
# note: If you're still using Vanilla JS, don't follow these instruction
yarn remove @babel/core @babel/plugin-transform-runtime @babel/runtime
```

If you're using `npm`

```bash
# note: only do this if you're using TypeScript
# note: If you're still using Vanilla JS, don't follow these instruction
npm uninstall @babel/core @babel/plugin-transform-runtime @babel/runtime
```

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />

    <title>Parcel Boilerplate</title>

    <link rel="stylesheet" href="./style.css" />
  </head>
  <body>
    <h1>Parcel Boilerplate</h1>

    <!-- notice the extension is no longer .js but .ts -->
    <script src="./index.ts"></script>
  </body>
</html>
```

## Framework

ParcelJS is also support framework like React, Preact, Vue and even Svelte. Fundamentally, the way we use framework with Parcel is just same as above. Oh nooooo! That really awesome, we can start developing using framework only using Parcel? What a day!

For more information about using framework, head to [Parcel documentation](https://parceljs.org/recipes.html).
