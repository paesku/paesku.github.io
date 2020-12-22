const postcss = require('postcss');
const autoprefixer = require('autoprefixer');

module.exports = (code) => postcss([autoprefixer]).process(code).css;
