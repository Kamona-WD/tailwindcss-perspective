# @kamona/tailwindcss-perspective

[![GitHub license](https://img.shields.io/github/license/Kamona-WD/tailwindcss-perspective)](https://github.com/Kamona-WD/tailwindcss-perspective/blob/main/LICENSE)
[![Downloads](https://img.shields.io/npm/dm/@kamona/tailwindcss-perspective.svg?sanitize=true)](https://npmcharts.com/compare/@kamona/tailwindcss-perspective?minimal=true)
[![Version](https://img.shields.io/npm/v/@kamona/tailwindcss-perspective.svg?sanitize=true)](https://www.npmjs.com/package/@kamona/tailwindcss-perspective)

### A little bit of utility classes related to css 3d transform

## Installation

> Note that @kamona/tailwindcss-perspective works only in `jit` mode.

Install the plugin from npm:

```sh
# Using npm
npm install -D @kamona/tailwindcss-perspective

# Using Yarn
yarn add -D @kamona/tailwindcss-perspective
```

Then add the plugin to your `tailwind.config.js` file:

```js
// tailwind.config.js
module.exports = {
  mode: 'jit',
  theme: {
    // ...
  },
  plugins: [
    require('@kamona/tailwindcss-perspective'),
    // ...
  ],
}
```

## Basic usage

[**View the live examples**](https://kamona-wd.github.io/tailwindcss-perspective/)

[**Read this tutorial to get familiar with 3d transformation in css**](https://3dtransforms.desandro.com/)

##### Basic Examples

```html
<div class="perspective-9">
  <div class="w-40 h-40 p-4 bg-red-500 rotate-x-30 rotate-y-35 -rotate-z-20">
    <h2>3D transform</h2>
  </div>
</div>
```

First you need to add `perspective-*` class to parent element to activate 3d space to its children.

| Class               | Value  |
| ------------------- | ------ |
| `perspective-none`  | none   |
| `perspective-1`     | 100px  |
| `perspective-2`     | 200px  |
| `perspective-3`     | 300px  |
| `perspective-4`     | 400px  |
| `perspective-5`     | 500px  |
| `perspective-6`     | 600px  |
| `perspective-7`     | 700px  |
| `perspective-8`     | 800px  |
| `perspective-9`     | 900px  |
| `perspective-10`    | 1000px |
| `perspective-25vw`  | 25vw   |
| `perspective-50vw`  | 50vw   |
| `perspective-75vw`  | 75vw   |
| `perspective-100vw` | 100vw  |

All default `rotate` values also available to `rotate-x`, `rotate-y`, and `rotate-z` with more values.

```js
//
{
  rotate3d: (theme) => ({
    // default values
    // https://tailwindcss.com/docs/rotate
      ...theme('rotate'),
      // new values
      ...{
          '-60': '-60deg',
          '-50': '-50deg',
          '-40': '-40deg',
          '-35': '-35deg',
          '-30': '-30deg',
          '-25': '-25deg',
          '-20': '-20deg',
          '-15': '-15deg',
          '-10': '-10deg',
          10: '10deg',
          15: '15deg',
          20: '20deg',
          25: '25deg',
          30: '30deg',
          35: '35deg',
          40: '40deg',
          50: '50deg',
          60: '60deg',
      }
  }),
}
//
```

All default `translate-x` and `translate-y` values also available to `translate-z`.

```html
<div class="perspective-9">
  <div class="w-40 h-40 p-4 bg-red-500 translate-z-20 rotate-x-30 rotate-y-35 -rotate-z-20">
    <h2>3D transform</h2>
  </div>
</div>
```

###### `transform-style-3d` class
An element’s perspective only applies to direct descendant children. In order for subsequent children to inherit a parent’s perspective, and live in the same 3D space, the parent can pass along its perspective with `transform-style: preserve-3d`.

```html
<div class="p-20">
  <div class="perspective-9">
    <!-- we need to add 'transform-style-3d' class to make its child live in the same 3d space -->
    <div class="w-40 h-40 p-4 bg-green-500 transform-style-3d rotate-x-30 rotate-y-35 -rotate-z-20">
      <div class="flex justify-end">
        <p
          class="p-2 translate-x-10 -translate-y-6 border border-black shadow-xl bg-white/70 translate-z-16 -rotate-x-10 -rotate-y-30 rotate-z-20"
        >
          3D transform
        </p>
      </div>
    </div>
  </div>
</div>
```

###### Perspective origin.

| Class                             | Properties                         |
| --------------------------------- | ---------------------------------- |
| `perspective-origin-center`       | `perspective-origin: center`       |
| `perspective-origin-top`          | `perspective-origin: top`          |
| `perspective-origin-top-right`    | `perspective-origin: top right`    |
| `perspective-origin-right`        | `perspective-origin: right`        |
| `perspective-origin-bottom-right` | `perspective-origin: bottom right` |
| `perspective-origin-bottom`       | `perspective-origin: bottom`       |
| `perspective-origin-bottom-left`  | `perspective-origin: bottom left`  |
| `perspective-origin-left`         | `perspective-origin: left`         |
| `perspective-origin-top-left`     | `perspective-origin: top-left`     |

---

##### More information soon...
