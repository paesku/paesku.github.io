const htmlMinifier = require('html-minifier');

module.exports = (content, outputPath = '.html') => {
  if (outputPath.endsWith('.html')) {
    return htmlMinifier.minify(content, {
      collapseWhitespace: true,
      removeComments: true,
      useShortDoctype: true,
      minifyJS: true,
    });
  }

  return content;
}
