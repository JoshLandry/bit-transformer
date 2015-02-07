'use strict';

var fs = require('fs');
var expect = require('chai').expect;
var bitmapReader = require('../lib/bitmapReader');

describe('bitmapReader', function() {
  before(function() {
    // remove ./img/newbmp.bmp if it exists.
    try{
      fs.unlinkSync('./img/newbmp.bmp');
    } catch(err) {}
  });

  it('should', function() {

  });
});
