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

## Install Webpack

First of all, we need to install **webpack**. But, we need to install 3 packages for webpack to works. First `webpack`, the main or core functionalities webpack. Second `webpack-cli`, so we can use webpack from our command line, and third is `webpack-dev-server`, it's a server for development that provides us with a simple web server and the ability to use live reloading.

Let's install 3 of those:

```bash
# If you're using yarn
yarn add --dev webpack webpack-cli webpack-dev-server

# If you're using npm
npm install --save-dev webpack webpack-cli webpack-dev-server
```

At this point, we can already use **webpack**, because starting **webpack** version 4, it doesn't require any configuration. Still didn't believe ? Let's test it and fill our `index.js` with code below:

```js
// src/index.js
const myName = 'John Doe';

function greet(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Hello ${name}!`);
    }, 1000);
  });
}

greet(myName).then(response => console.log(response));
```

Now open up our `package.json`, and add scripts to use **webpack**:

```json
// package.json
"scripts": {
  "compile": "webpack"
},
```

Now we can use that scripts on our terminal.

```bash
# If you're using yarn
yarn compile

# If you're using npm
npm run compile
```

With this scripts **webpack** will automatically take our script at `src/index.js` as the entry point, and will generate `dist/main.js` as the output code. Awesome right?

But, we want more than this, for example, we want to use development server to live reload so we can get instant feedback on the browser while update our code, use the latest JS syntax, use css or sass/scss, automatically add vendor prefix for our css, and optimize our code for production. But how ?

That's where **webpack configuration** come in handy! Let's use it, first, we're gonna setup development server and then setup our project to use latest JS features (ES6 and beyond).

## ES6 and Beyond

To use the latest JS features today, we're gonna need [Babel](https://babeljs.io/). But, what is **Babel**? **Babel** is a tool that help us to **compile** our code (newest JS features) into a backwards compatible version of JS so that older browser can understand. **Babel** not only compile our code, but it will also **Polyfill** features that are missing in older browser using **core-js** library.

Let's add **Babel** to our project:

```bash
# If you're using yarn
yarn add --dev @babel/core @babel/preset-env babel-loader
yarn add core-js

# If you're using npm
npm install --save-dev @babel/core @babel/preset-env babel-loader
npm install --save core-js
```

Before we add configuration to use **Babel**, first, we need to define what browser that we want to support using [browserlist](https://browserl.ist/). Note that `browserlist` not only used by **Babel**, but it also used by other tools like **autoprefixer**.

Let's add the list of browser that we want to support then in our `package.json`:

```json{9-13}
// package.json
// In this example we are using this browserlist
// Which support 91% global coverage
// You can check here: https://browserl.ist/
// Docs: https://github.com/browserslist/browserslist
"scripts": {
  "compile": "webpack"
},
"browserslist": [
  ">0.2%",
  "not dead",
  "not op_mini all"
],
```

Now come the fun part, where we are going to using webpack configuration to use **development server** and **Babel** that just we installed. Open up our `config/webpack.config.js` and add code below:

```js
// config/webpack.config.js
const path = require('path');

module.exports = {
  /**
   * Define webpack mode
   * Which webpack will set NODE_ENV to 'development'
   * Docs: https://webpack.js.org/configuration/mode/
   */
  mode: 'development',
  /**
   * Here, we tell webpack where entry point of our code
   * If you only have single entry point you can also do it like below
   * entry: './src/index.js'
   * Docs: https://webpack.js.org/configuration/entry-context/
   */
  entry: {
    main: './src/index.js',
  },
  /**
   * Tell webpack where it should output our
   * bundles, assets and anything else
   * Docs: https://webpack.js.org/configuration/output/
   */
  output: {
    /**
     * Here you problaly wondering why we navigate to current folder then navigate back?
     * Because we don't want our generated code inside config folder
     * That's why we have to navigate back to the root directory of our project
     */
    path: path.join(__dirname, '../build'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].chunk.js',
  },
  /**
   * This devServer option is our development server that get picked up by webpack-dev-server
   * Docs: https://webpack.js.org/configuration/dev-server/
   */
  devServer: {
    // Serves everything from our build folder which is our output folder
    contentBase: path.join(__dirname, '../build'),
    // Enable gzip compression
    compress: true,
    // Which port we want to use, in this case we use port 3000
    port: 3000,
    // This will shows a full-screen overlay in the browser when there are compiler errors
    overlay: true,
  },
  /**
   * Generate source-maps to make it easier to track down errors and warnings
   * In this example we're using cheap-module-eval-source-map (recommend by webpack)
   * Docs: https://webpack.js.org/configuration/devtool/
   */
  devtool: 'cheap-module-eval-source-map',
  module: {
    rules: [
      /**
       * Here we are kinda tell webpack if it come accross js file
       * Please use babel-loader
       */
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            /**
             * Here where we put our Babel config
             * We can also create .babelrc or babel.config.js in the root of our project directory
             * to put our babel config instead in here,
             * but in this example, we put our config here
             * Docs: https://babeljs.io/docs/en/config-files
             */
            presets: [
              [
                '@babel/preset-env',
                {
                  useBuiltIns: 'usage',
                  debug: false,
                  corejs: 3,
                },
              ],
            ],
          },
        },
      },
    ],
  },
};
```

Fuhhhh, that's alot. What's next? Our HTML entry point (of course, because this is web project). Let's add some content to our html template:

```html
<!-- src/index.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />

    <title>Webpack Boilerplate</title>
  </head>
  <body>
    <h1>Webpack boilerplate</h1>
  </body>
</html>
```

You problaly ask, how to include our HTML template to our bundle?

Well, to do that, we are going to use `html-webpack-plugin`. This plugin will include our html and inject our js bundle automatically into our html using `<script>` tag. Let's install it:

```bash
# If you're using yarn
yarn add --dev html-webpack-plugin

# If you're using npm
npm install --save-dev html-webpack-plugin
```

And now use it on our webpack config:

```js{2,7-12}
// config/webpack.config.js
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // other configs
  module: {},
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
  ],
};
```

By now, we can already start our development server. Let's update our `package.json` scripts.

```json{6}
// package.json
"scripts": {
  // Before (You can delete this compile scripts)
  "compile": "webpack",
  // After
  "start": "webpack-dev-server --open --config=config/webpack.config.js"
},
```

Now we can start our development server using `yarn start` or `npm run start`, then it will automatically open our browser and open up [http://localhost:3000](http://localhost:3000).

You probably wondering, can we use `async await` instead in our `index.js`, of course we can. Let's update our index.js to use `async await`:

```js
// src/index.js
const myName = 'John Doe';

function greet(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Hello ${name}!`);
    }, 1000);
  });
}

// I know this is dumb
// Just for demo purpose
async function print() {
  const response = await greet(myName);
  console.log(response);
}

print();
```

Oh no, when we start again our development server, we get these error:

![Error regenerator runtime](/images/error-async-await.jpg)

If you read the error carefully, **webpack** cannot find module `regenerator-runtime/runtime`, because to use `async await` we need 2 packages, first `@babel/runtime` and then `@babel/plugin-transform-runtime`. Let's install it to our project:

```bash
# If you're using yarn
yarn add @babel/runtime
yarn add --dev @babel/plugin-transform-runtime

# If you're using npm
npm install --save @babel/runtime
npm install --save-dev @babel/plugin-transform-runtime
```

Once it done, let's use it to our Babel config on `webpack.config.js`:

```js{22}
// config/webpack.config.js
module.exports = {
  // other configs
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  useBuiltIns: 'usage',
                  debug: false,
                  corejs: 3,
                },
              ],
            ],
            plugins: ['@babel/plugin-transform-runtime'],
          },
        },
      },
    ],
  },
};
```

Now the error is gone, and we can start using `async await` on our project. Yeayyy!

What about other features like `optional-chaining` and `nullish-coalescing-operator`? Well, we can install the plugins and use it on our project same like above.

```bash
# If you're using yarn
yarn add --dev @babel/plugin-proposal-optional-chaining @babel/plugin-proposal-nullish-coalescing-operator

# If you're using npm
npm install --save-dev @babel/plugin-proposal-optional-chaining @babel/plugin-proposal-nullish-coalescing-operator
```

```js{24-25}
// config/webpack.config.js
module.exports = {
  // other configs
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  useBuiltIns: 'usage',
                  debug: false,
                  corejs: 3,
                },
              ],
            ],
            plugins: [
              '@babel/plugin-transform-runtime',
              '@babel/plugin-proposal-optional-chaining',
              '@babel/plugin-proposal-nullish-coalescing-operator',
            ],
          },
        },
      },
    ],
  },
};
```

What if we want to use `dynamic import`, can we do that? Yes we can! Since **Babel** version **7.4.0**, `dynamic import` support enabled by default, so we don't have to install `@babel/plugin-proposal-dynamic-import`, but if our Babel version below that version, we have to add that plugin to our project.

Let's use `dynamic import` on our project:

```js
// src/greet.js
export function greet(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Hello ${name}!`);
    }, 1000);
  });
}

// src/index.js
const myName = 'John Doe';

async function print() {
  // Here we are using dynamic import
  const { greet } = await import('./greet');
  const response = await greet(myName);
  console.log(response);
}

print();
```

Now, I'm sure we've covered most of the JavaScript parts. Let's get to the next part, **Stylesheet**.

## Stylesheet (CSS, SASS)
