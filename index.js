const _ = require('lodash')

function defaults() {
  return {
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
    variants: ['responsive'],
  }
}

module.exports = function (options) {
  options = _.isFunction(options)
   ? options(defaults())
   : _.defaults(options, defaults())
  
  return function ({ addUtilities, e }) {
    const utilities = [
      ..._.map(options.display, (size, name) => {
        return {
          [`.${e('display-' + name)}`]: {
            fontSize: size,
          },
        }
      }),
      ..._.map(options.sign, (size, name) => {
        return {
          [`.${e('sign-' + name)}`]: {
            fontSize: size,
          },
        }
      }),
    ]
    
    addUtilities(utilities, options.variants)
  }
}
