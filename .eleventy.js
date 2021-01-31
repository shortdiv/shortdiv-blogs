const { minify } = require("terser");

module.exports = (eleventyConfig) => {
  eleventyConfig.addNunjucksAsyncFilter("jsmin", async function (
    code,
    callback
  ) {
    try {
      const minified = await minify(code);
      callback(null, minified.code);
    } catch (err) {
      console.error("Terser error: ", err);
      // Fail gracefully.
      callback(null, code);
    }
  });
  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "dist"
    }
  }
};