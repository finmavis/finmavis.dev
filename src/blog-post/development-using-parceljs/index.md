---
path: '/blog/development-using-parceljs'
title: 'Development using ParcelJS'
date: '2019-11-25'
author: 'Fin Mavis'
tags: ['JavaScript', 'ParcelJS', 'Bundler']
description: 'Some description'
banner: './images/kira-auf-der-heide-IPx7J1n_xUc-unsplash.jpg'
bannerCreditName: 'Kira auf der Heide'
bannerCreditLink: 'https://unsplash.com/photos/IPx7J1n_xUc'
---

## What is ParcelJS ?

According to the tag line on their home page, [Parcel](https://parceljs.org/) is a "Blazing fast, zero-configuration web application bundler". But in my opinion Parcel is a bundler that amazingly super simple to use, it's like magic. But, what do i mean by Magic ? Because Parcel will bundle all of our code like HTML, CSS, SASS, JavaScript, TypeScript without the complex of configuration stuff, so we can focus more on developing our apps instead of configure it.

## Getting Started

First, we need to create our Project. Create a new folder,and i'll pick a folder name `parcel-boilerplate`. Inside that folder initialize our project with `npm init` or `yarn init`. Once we done, inside our will have `package.json`.

## Install ParcelJS

We can now install ParcelJS, along with our other dependencies. Run the following to install Parcel :

If you're using `yarn`

```bash
yarn add --dev parcel-bundler
```

If you're using `npm`

```bash
npm install --save-dev parcel-bundler
```

Once we done, we can move on to adding some basic code to get our app started.

## Basic Code

Parcel can take any type of file as an entry point, but an HTML or JavaScript file is a good place to start. If we link our main JavaScript file in the HTML using a relative path, Parcel will also process it for us, and replace the reference with a URL to the output file. So let's create our HTML and JavaSCript file. Create a `src` folder inside our project directory and create two file inside that directory, `index.html` and `index.js`. And our Project structure look like below :

```text
|-- src
    |-- index.html
    |-- index.js
|-- package.json
```

Add the following to `index.html`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />

    <title>Parcel Boilerplate</title>
  </head>
  <body>
    <h1 class="Tes">Parcel Boilerplate</h1>

    <script src="./index.js"></script>
  </body>
</html>
```

And then Add the following to `index.js`

```js
function HelloWorld() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('Hello World'), 1000);
  });
}

HelloWorld().then(value => console.log(value));
```

Open `package.json` and add new scripts for starting our parcel:

```json
"scripts": {
  "start": "parcel ./src/index.html --open",
  "build": "parcel build ./src/index.html"
},
```

These commands will allow us to start the development mode and have it open in the browser automatically, and build our app for production.
