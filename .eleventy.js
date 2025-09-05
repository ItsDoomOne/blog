const cacheBuster = require('@mightyplow/eleventy-plugin-cache-buster');

module.exports = function(eleventyConfig) {
  const cacheBusterOptions = {};
  eleventyConfig.addPlugin(cacheBuster, cacheBusterOptions);
  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByTag("posts").sort((a, b) => b.date - a.date);
  });
  return {
    pathPrefix: "/blog/",
  };
};
