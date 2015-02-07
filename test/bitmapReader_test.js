'use strict';

var fs = require('fs');
var expect = require('chai').expect;
var bitmapReader = require('../lib/bitmapReader');

describe('bitmapReader', function() {
  before(function() {
    // remove ./img/newbmp.bmp if it exists.
    fs.unlinkSync('./img/newbmp.bmp');
  });

  it('should', function() {

  });
});
