'use strict';

var bitmapReader = require('./lib/bitmapReader');

var app = function() {
  bitmapReader();
};

app();

module.exports = app;
