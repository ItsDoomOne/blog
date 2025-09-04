const crypto = require("crypto");
const fs = require("fs");

module.exports = function(eleventyConfig) {

  eleventyConfig.addNunjucksFilter("hashFile", function(filename) {
    const data = fs.readFileSync(`./_site/${filename}`);
    const hash = crypto.createHash("md5").update(data).digest("hex").slice(0,8);
    return `${filename}?v=${hash}`;
  });

  return {
    pathPrefix: "/blog/",
  };
};
