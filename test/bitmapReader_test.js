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

  after(function() {
    // remove ./img/newbmp.bmp if it exists.
    try{
      fs.unlinkSync('./img/newbmp.bmp');
    } catch(err) {}
  });

  it('should', function() {
    var original = fs.readFileSync('./img/test.bmp');
    bitmapReader();
    var newbmp = fs.readFileSync('./img/newbmp.bmp');

    expect(original).to.not.eql(newbmp);
  });
});
