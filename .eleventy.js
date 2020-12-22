const pluginSass = require('eleventy-plugin-sass');

module.exports = config => {
  config.addPlugin(pluginSass, {
    watch: ['src/styles/**/*.{scss,sass}'],
  });

  config.addPassthroughCopy({
    'src/assets/*.(jpg|png)': 'img',
    'src/assets/portfolio/img/*.(jpg|png)': 'img/portfolio'
  });

  config.addFilter('postCSS', require('./transform/post-css'));
  config.addTransform('htmlMinify', require('./transform/html-minifier'));

  return {
    dir: {
      input: 'src',
    }
  };
};

