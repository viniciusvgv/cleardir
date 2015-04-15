#!/usr/bin/env node
var ClearDir = require('./cleardir');

var cwd = process.cwd();
var cleardir = new ClearDir(cwd);

console.log("Cleaning '" + cwd + "'...")

cleardir.clear();

