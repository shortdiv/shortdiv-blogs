const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const postcssNested = require('postcss-nested')
const postcssPresetEnv = require('postcss-preset-env');

const plugins = process.env.NODE_ENV === 'production'
  ? [ autoprefixer(), postcssNested(), cssnano(), postcssPresetEnv() ]
  : [ autoprefixer(), postcssNested() ]
module.exports = {
  plugins,
}