'use strict';

var fs = require('fs');
var expect = require('chai').expect;
var bitmapReader = require('../lib/bitmapReader');

describe('bitmapReader.invert', function() {
  before(function() {
    // remove ./img/newbmp.bmp if it exists.
    try{
      fs.unlinkSync('./img/invertedbmp.bmp');
    } catch(err) {}
  });

  after(function() {
    // remove ./img/newbmp.bmp if it exists.
    try{
      fs.unlinkSync('./img/invertedbmp.bmp');
    } catch(err) {}
  });

  it('should not equal the original bitmap file.', function() {
    var original = fs.readFileSync('./img/test.bmp');
    bitmapReader.invert();
    var newbmp = fs.readFileSync('./img/invertedbmp.bmp');

    expect(original).to.not.eql(newbmp);
  });
});

describe("bitmapReader.invert", function() {
  before(function() {
    try{
      fs.unlinkSync('./img/invertedbmp.bmp');
    } catch(err) {}
  });

  after(function() {
    try{
      fs.unlinkSync('./img/invertedbmp.bmp');
    } catch(err) {}
  });

  it("should modify the bitmap's color palot", function() {
    var originalBmp = fs.readFileSync('./img/test.bmp');
    var originalColorPalette = originalBmp.slice(54, 1078);
    bitmapReader.invert();
    var newBmp = fs.readFileSync('./img/invertedbmp.bmp');
    var newBmpColorPalette = newBmp.slice(54, 1078);

    expect(originalColorPalette).not.to.eql(newBmpColorPalette);
  });
});

describe('bitmapReader.random', function() {
  before(function() {
    try{
      fs.unlinkSync('./img/randombmp.bmp');
    } catch(err) {}
  });

  after(function() {
    try{
      fs.unlinkSync('./img/randombmp.bmp');
    } catch(err) {}
  });

  it('should not equal the original bitmap file.', function() {
    var original = fs.readFileSync('./img/test.bmp');
    bitmapReader.random();
    var newbmp = fs.readFileSync('./img/randombmp.bmp');

    expect(original).to.not.eql(newbmp);
  });
});

describe("bitmapReader.random", function() {
  before(function() {
    try{
      fs.unlinkSync('./img/randombmp.bmp');
    } catch(err) {}
  });

  after(function() {
    try{
      fs.unlinkSync('./img/randombmp.bmp');
    } catch(err) {}
  });

  it("should modify the bitmap's color palot", function() {
    var originalBmp = fs.readFileSync('./img/test.bmp');
    var originalColorPalette = originalBmp.slice(54, 1078);
    bitmapReader.random();
    var newBmp = fs.readFileSync('./img/randombmp.bmp');
    var newBmpColorPalette = newBmp.slice(54, 1078);

    expect(originalColorPalette).not.to.eql(newBmpColorPalette);
  });
});
