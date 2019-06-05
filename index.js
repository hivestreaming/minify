const uglify = require('uglify-js');
const fs = require('fs');

const jsFile = process.argv[2];
const excludes = process.argv[3];

const result = uglify.minify(jsFile, excludes ? {
  mangle: {
    except: excludes,
  }
} : undefined);

fs.writeFile("hive.min.js", result.code, function(err) {
  if(err) {
    return console.log(err);
  }

  console.log("Minified file written to hive.min.js");
});
