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

  it('should not equal the original bitmap file.', function() {
    var original = fs.readFileSync('./img/test.bmp');
    bitmapReader();
    var newbmp = fs.readFileSync('./img/newbmp.bmp');

    expect(original).to.not.eql(newbmp);
  });
});

describe("bitmapReader", function() {
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

  it("should modify the bitmap's color palot", function() {
    var originalBmp = fs.readFileSync('./img/test.bmp');
    var originalColorPalette = originalBmp.slice(54, 1078);
    bitmapReader();
    var newBmp = fs.readFileSync('./img/newbmp.bmp');
    var newBmpColorPalette = newBmp.slice(54, 1078);

    expect(originalColorPalette).not.to.eql(newBmpColorPalette);
  });
});
