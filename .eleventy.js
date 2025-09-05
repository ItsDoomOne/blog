const cacheBuster = require('@mightyplow/eleventy-plugin-cache-buster');

module.exports = function(eleventyConfig) {
  // ⚡ Plugin cache-buster
  const cacheBusterOptions = {};
  eleventyConfig.addPlugin(cacheBuster, cacheBusterOptions);

  // ⚡ Ordena a collection "posts" do mais novo pro mais velho
  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByTag("posts").sort((a, b) => b.date - a.date);
  });

  // ⚡ Configura pathPrefix pra GitHub Pages
  return {
    pathPrefix: "/blog/",
  };
};
