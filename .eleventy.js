const pluginSass = require("eleventy-plugin-sass");
const sassPluginOptions = {
  watch: ['src/styles/**/*.{scss,sass}'],
};
module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginSass, sassPluginOptions);
  eleventyConfig.addPassthroughCopy({ 'src/assets/*.(jpg|png)': 'img' });
  eleventyConfig.addPassthroughCopy({ 'src/assets/portfolio/img/*.(jpg|png)': 'img/portfolio' });

  return {
    dir: {
      input: 'src',
    }
  };
};

