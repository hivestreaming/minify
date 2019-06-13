const uglify = require('uglify-js');
const fs = require('fs');

// input file name to be minified
const jsFile = process.argv[2];

// file name for the excludes file
const excludesFile = process.argv[3];

// optional output file name
const outputFile = process.argv.length >= 5 ? process.argv[4] : "hive.min.js";

var excludes = require("./" + excludesFile)

const result = uglify.minify([jsFile], excludes ? {
  // beautify: true,
  output: {
    comments: /^!/  // maintain the license comments
  },
  mangle: {
    reserverd: excludes,
    properties: {
      regex: /^((?!\.).)*$/
    }
  }
} : undefined);

fs.writeFile(outputFile, result.code, function(err) {
  if(err) {
    return console.log(err);
  }

  console.log("Minified file written to hive.min.js");
});
