// use strict

var fs = require("fs")

var ClearDir = function(path) {
  this.path = path;
  this.unwantedFiles = [/\.class$/, /\.DS_STORE$/, /\.rspec$/];
}

ClearDir.prototype.clear = function(callback) {
  var found = [];
  var self = this;

  fs.readdir(this.path, function(err, files) {
    if (err) {
      callback(err);
    }

    files = files.filter(function(file){
      var matches = false;

      self.unwantedFiles.forEach(function(exp) {
        if (file.match(exp)) {
          matches = true;
          return;
        }
      });

      return matches;
    });

    if (files.length < 1) {
      return callback(null, []);
    } else {
      var pending = files.length, deleted = [];

      files.forEach(function(file) {
        fs.unlink(file, function(err){
          if (err) {
            callback(err);
          } else {
            deleted.push(file);
          }

          pending--;

          if (pending == 0){
            callback(null, deleted);
          }
        });
      });
    }

  });
};

module.exports = ClearDir;
