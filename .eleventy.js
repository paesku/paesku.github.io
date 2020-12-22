const pluginSass = require('eleventy-plugin-sass');
const htmlMinifier = require('html-minifier');

module.exports = config => {
  config.addPlugin(pluginSass, {
    watch: ['src/styles/**/*.{scss,sass}'],
  });

  config.addPassthroughCopy({'src/assets/*.(jpg|png)': 'img'});
  config.addPassthroughCopy({'src/assets/portfolio/img/*.(jpg|png)': 'img/portfolio'});

  config.addTransform('htmlMinify', (content, outputPath) => {
    if (outputPath.endsWith('.html')) {
      return htmlMinifier.minify(content, {
        collapseWhitespace: true,
        removeComments: true,
        useShortDoctype: true,
        minifyJS: true,
      });
    }

    return content;
  });

  return {
    dir: {
      input: 'src',
    }
  };
};

