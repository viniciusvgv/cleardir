#!/usr/bin/env node
var ClearDir = require('./cleardir');

var cwd = process.cwd();
var cleardir = new ClearDir(cwd);

console.log("Cleaning '" + cwd + "'...");

cleardir.clear(function(err, deleted) {
  console.log("callingback with "+err+" and deleted "+deleted);
  if (err) {
    console.log("Failed to clean directory");
  } else {
    if (deleted.length > 0) {
      deleted.forEach(function(file) {
        console.log(file + " was deleted");
      });
    } else {
      console.log("Nothing to delete");
    }
  }
});

