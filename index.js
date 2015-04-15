var ClearDir = function(path){
  this.path = path;
  this.unwantedFiles = [/\.class$/, /\.DS_STORE$/, /\.sassc$/, /\.sass-cache$/, /\.rspec$/];
}

cleandir.prototype.clear = function(){
  fs.readdir(path, function(err, files) {
      if (err) throw err;

      var found = [];

      files.forEach(function(file) {
          unwantedFiles.forEach(function(exp) {
            if (file.match(exp)) {
              found.push(file);
            }
          });
      });

      found.forEach(function(file) {
        fs.unlink(file, function (err) {
          if (err) throw err;

          console.log('deleted ' + file);
        });
      });
  });
}
