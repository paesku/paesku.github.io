const pluginSass = require("eleventy-plugin-sass");
const sassPluginOptions = {
  watch: ['_sass/**/*.{scss,sass}'],
};
module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginSass, sassPluginOptions);
  eleventyConfig.addPassthroughCopy({ 'assets/*.jpg': 'img' });
  eleventyConfig.addPassthroughCopy({ 'assets/portfolio/img/*.jpg': 'img/portfolio' });
};

