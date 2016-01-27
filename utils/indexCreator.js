var through = require('through');
var File = require('vinyl');

module.exports = function(out, options) {

  options = options || {};

  var files = [];
  var filePaths = [];

  function genContent(filePaths){
    var content = ''
    for(var x in filePaths) {
      content += '<link rel="import" href="./' + filePaths[x] + '">\n'
    }
    return content
  }

  var onFile = function(file) {
    files.push(file);
    var path
	if (options.absolute) {
	  path = file.path;
	}
	else {
	  path = file.path.replace(process.cwd(), '');
    if (!!options.removePrefix) {
      path = path.replace(options.removePrefix, '')
    }
	  path = path.replace(new RegExp('^[/\\\\]'), '');
	}
    filePaths.push(path.replace(/\\/g, '/'));
  };

  var onEnd = function() {

    var file = new File({
      path: out,
      overwrite: true,
      // contents: new Buffer(JSON.stringify(filePaths, null, '  '))
      contents: new Buffer(genContent(filePaths))
    });

    this.emit('data', file);
    this.emit('end');

  };

  return through(onFile, onEnd);

};