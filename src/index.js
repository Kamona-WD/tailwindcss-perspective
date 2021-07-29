const map = require('lodash.map')
const plugin = require('tailwindcss/plugin')

const perspectivePlugin = plugin(
  function ({ config, addUtilities, addBase, theme, e }) {
    if (config('mode') == 'jit') {
      addBase({
        '*, ::before, ::after': {
          '--tw-translate-x': '0',
          '--tw-translate-y': '0',
          '--tw-translate-z': '0',
          '--tw-rotate-x': '0',
          '--tw-rotate-y': '0',
          '--tw-rotate-z': '0',
          '--tw-skew-x': '0',
          '--tw-skew-y': '0',
          '--tw-scale-x': '1',
          '--tw-scale-y': '1',
          '--tw-scale-z': '1',
          // '--tw-self-perspective': '0',
          '--tw-transform': [
            'translateX(var(--tw-translate-x))',
            'translateY(var(--tw-translate-y))',
            'rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z))',
            'translateZ(var(--tw-translate-z))',
            'skewX(var(--tw-skew-x))',
            'skewY(var(--tw-skew-y))',
            'scale3d(var(--tw-scale-x), var(--tw-scale-y), var(--tw-scale-z))',
          ].join(' '),
        },
      })

      addUtilities({
        '.transform-style-flat': {
          'transform-style': 'flat',
        },
        '.transform-style-3d': {
          'transform-style': 'preserve-3d',
        },
      })

      addUtilities({
        '.backface-visible': {
          'backface-visibility': 'visible',
        },
        '.backface-hidden': {
          'backface-visibility': 'hidden',
        },
      })

      const perspectiveOriginUtilities = map(theme('transformOrigin'), (value, key) => {
        return {
          [`.${e(`perspective-origin-${key}`)}`]: {
            'perspective-origin': value,
          },
        }
      })

      addUtilities(perspectiveOriginUtilities)

      const perspectiveUtilities = map(theme('perspectiveValues'), (value, key) => {
        return {
          [`.${e(`perspective-${key}`)}`]: {
            perspective: value,
          },
        }
      })

      addUtilities(perspectiveUtilities)

      addUtilities({
        '.transform-3d-none': { transform: 'none' },
        // '.transform-3d': {
        //     '@defaults transform': {},
        //     transform: 'var(--tw-transform)',
        // }
      })

      const rotateXUtilities = map(theme('rotate3d'), (value, key) => {
        let className
        if (key.startsWith('-')) {
          className = `.${e(`-rotate-x${key}`)}`
        } else {
          className = `.${e(`rotate-x-${key}`)}`
        }
        return {
          [className]: {
            '--tw-rotate-x': value,
            transform: 'var(--tw-transform)',
          },
        }
      })

      addUtilities(rotateXUtilities)

      const rotateYUtilities = map(theme('rotate3d'), (value, key) => {
        let className
        if (key.startsWith('-')) {
          className = `.${e(`-rotate-y${key}`)}`
        } else {
          className = `.${e(`rotate-y-${key}`)}`
        }
        return {
          [className]: {
            '--tw-rotate-y': value,
            transform: 'var(--tw-transform)',
          },
        }
      })

      addUtilities(rotateYUtilities)

      const rotateZUtilities = map(theme('rotate3d'), (value, key) => {
        let className
        if (key.startsWith('-')) {
          className = `.${e(`-rotate-z${key}`)}`
        } else {
          className = `.${e(`rotate-z-${key}`)}`
        }
        return {
          [className]: {
            '--tw-rotate-z': value,
            transform: 'var(--tw-transform)',
          },
        }
      })

      addUtilities(rotateZUtilities)

      const translateXUtilities = map(theme('translate'), (value, key) => {
        let className
        if (key.startsWith('-')) {
          className = `.${e(`-translate-x${key}`)}`
        } else {
          className = `.${e(`translate-x-${key}`)}`
        }
        return {
          [className]: {
            '--tw-translate-x': value,
            transform: 'var(--tw-transform)',
          },
        }
      })

      addUtilities(translateXUtilities)

      const translateYUtilities = map(theme('translate'), (value, key) => {
        let className
        if (key.startsWith('-')) {
          className = `.${e(`-translate-y${key}`)}`
        } else {
          className = `.${e(`translate-y-${key}`)}`
        }
        return {
          [className]: {
            '--tw-translate-y': value,
            transform: 'var(--tw-transform)',
          },
        }
      })

      addUtilities(translateYUtilities)

      const translateZUtilities = map(theme('translate'), (value, key) => {
        let className
        if (key.startsWith('-')) {
          className = `.${e(`-translate-z${key}`)}`
        } else {
          className = `.${e(`translate-z-${key}`)}`
        }
        return {
          [className]: {
            '--tw-translate-z': value,
            transform: 'var(--tw-transform)',
          },
        }
      })

      addUtilities(translateZUtilities)

      const scaleXUtilities = map(theme('scale'), (value, key) => {
        return {
          [`.${e(`scale-x-${key}`)}`]: {
            '--tw-scale-x': value,
            transform: 'var(--tw-transform)',
          },
        }
      })

      addUtilities(scaleXUtilities)

      const scaleYUtilities = map(theme('scale'), (value, key) => {
        return {
          [`.${e(`scale-y-${key}`)}`]: {
            '--tw-scale-y': value,
            transform: 'var(--tw-transform)',
          },
        }
      })

      addUtilities(scaleYUtilities)

      const scaleZUtilities = map(theme('scale'), (value, key) => {
        return {
          [`.${e(`scale-z-${key}`)}`]: {
            '--tw-scale-z': value,
            transform: 'var(--tw-transform)',
          },
        }
      })

      addUtilities(scaleZUtilities)
    }
  },
  {
    theme: {
      perspectiveValues: {
        none: 'none',
        1: '100px',
        2: '200px',
        3: '300px',
        4: '600px',
        5: '500px',
        6: '600px',
        7: '700px',
        8: '800px',
        9: '900px',
        10: '1000px',
        '25vw': '25vw',
        '50vw': '50vw',
        '75w': '75vw',
        '100vw': '100vw',
      },
      translate3d: (theme, { negative }) => ({
        ...theme('spacing'),
        ...negative(theme('spacing')),
      }),
      rotate3d: (theme) => ({
        ...theme('rotate'),
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
        },
      }),
    },
  }
)

module.exports = perspectivePlugin
