# Tailwind CSS Typography Sizing plugin

Extra utility classes for typography sizing.

## Installation

Via npm or yarn:

```bash
# Using npm
npm install tailwindcss-typography-sizing --save-dev

# Using Yarn
yarn add tailwindcss-typography-sizing --dev
```

Add the following in your `tailwind.js` file.

```js
module.exports = {
  plugins: [require('tailwind-typography-sizing')()],
};
```

## Usage

By default, this plugin will add the following utility classes. These are also available as [responsive classes](https://tailwindcss.com/docs/responsive-design).

```css
.display-1
.display-2
.display-3
.display-4

.sign-1
.sign-2
```

### Configuration

You can configure the sizes for the `display` and `sign` utilities by passing the desired sizes for each utility to the options object. The default sizes are shown below.

```js
module.exports = {
  plugins: [
    require('tailwind-typography-sizing')({
      display: {
        '1': '6rem',
        '2': '5.5rem',
        '3': '4.5rem',
        '4': '3.5rem',
      },
      sign: {
        '1': '12rem',
        '2': '8rem',
      },
    }),
  ],
};
```

You can also set the desired state variants by passing a variants array to the options object. The default variants are shown below.

```js
module.exports = {
  plugins: [
    require('tailwind-typography-sizing')({
      variants: ['responsive'],
    }),
  ],
};
```
