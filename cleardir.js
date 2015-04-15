var fs = require("fs")

var ClearDir = function(path){
  this.path = path;
  this.unwantedFiles = [/\.class$/, /\.DS_STORE$/, /\.rspec$/];
}

ClearDir.prototype.clear = function(){
  var found = [];
  var self = this;

  fs.readdir(this.path, function(err, files) {
    if (err) return [];

    files.forEach(function(file) {
      self.unwantedFiles.forEach(function(exp) {
        if (file.match(exp)) {
          fs.unlink(file, function (err) {
            if (err){
              throw err;
            } else {
              console.log("Deleted " + file);
            }
          });
        }
      });
    });
  });
}

module.exports = ClearDir;
