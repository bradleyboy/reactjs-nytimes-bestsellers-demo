// preprocessor.js
var ReactTools = require('react-tools');
var babel = require("6to5-core");

module.exports = {
  process: function(src, filename) {
  	if (filename.indexOf("node_modules") === -1 && babel.canCompile(filename)) {
      src = babel.transform(src, { filename: filename }).code;
    }
    return ReactTools.transform(src);
  }
};