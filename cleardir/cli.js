#!/usr/bin/env node
var ClearDir = require('cleardir');

var cwd = process.cwd();
var cleardir = new ClearDir(cwd);

var deleted = cleardir.clear()

if (deleted.size > 0) {
  deleted.forEach(function (file){
    console.log(file+" was deleted!");
  });
} else {
  console.log("Nothing to delete");
}
