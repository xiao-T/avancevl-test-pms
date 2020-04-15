/**
 * postcss config
 * by xiaoT
 */

let path = require('path')

module.exports = ({ file, options, env }) => {
  return {
    // map: true,
    // syntax: 'postcss-scss',
    plugins: {
      'postcss-import': {
        path: path.resolve(__dirname, './src/common/css')
      },
      'precss': {},
      'postcss-functions': {
        functions: {
          rem: function ($px) {
            return ($px / 16) + 'rem'
          }
        }
      },
      'postcss-preset-env': {
        browsers: 'last 2 versions',
        stage: 0
      },
      'cssnano': env === 'development' ? false : {},
      'postcss-css-variables': {
        'variables': {
          '--gameMainColor': '#141a34',
          '--borderColor': '#e9e9e9',
          '--yellow': '#FF8200',
          '--orange': '#ff5900',
          '--black': '#303030',
          '--gray': '#999',
          '--green': '#38C751',
          '--red': '#c00808',
          '--highlighGray': '#e8e8e8'
        }
      }
    }
  }
}
