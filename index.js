var ClearDir = function(path){
  this.path = path;
  this.unwantedFiles = [/\.class$/, /\.DS_STORE$/, /\.rspec$/];
}

ClearDir.prototype.clear = function(){
  fs.readdir(path, function(err, files) {
      if (err) return [];

      var found = [];

      files.forEach(function(file) {
        unwantedFiles.forEach(function(exp) {
          if (file.match(exp)) {
            fs.unlink(file, function (err) {
              if (err){
                throw err;
              } else {
                found.push(file);
              }
            });
          }
        });
      });

      return found;
  });
}

module.exports = ClearDir;
