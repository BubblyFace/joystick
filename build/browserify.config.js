var fs = require("fs");
var browserify = require("browserify");
var path = require('path');
var entryPath = path.join(__dirname, '..', 'src', 'index.js');

browserify(entryPath)
  .transform("babelify", {presets: ["@babel/preset-env"]})
  .bundle()
  .pipe(fs.createWriteStream("./dist/bundle.js"));