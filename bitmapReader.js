'use strict';

var fs = require('fs');
var bitmap = fs.readFileSync('./img/test.bmp');

var bitmapObject = {};

bitmapObject.type = bitmap.toString('utf-8', 0, 2);
bitmapObject.size = bitmap.readInt32LE(2);
bitmapObject.startOfPixels = bitmap.readInt32LE(10);
bitmapObject.width = bitmap.readInt32LE(18);
bitmapObject.height = bitmap.readInt32LE(22);
bitmapObject.colorDepth = bitmap.readInt16LE(28);
bitmapObject.paletteSize = bitmap.readInt32LE(46);

console.dir(bitmapObject);

console.log(bitmap);

console.log(bitmapObject.size);
console.log(bitmapObject.startOfPixels);


// 54 - 1078

var colorPalette = bitmap.slice(54, 1078);
console.log(colorPalette);

var colorPaletteCopy = colorPalette;

for(var i=0; i<1024; i++) {
	colorPaletteCopy[i] = colorPaletteCopy[i + 2];
}

console.log(colorPaletteCopy);

if (colorPalette.length == colorPaletteCopy.length) {
	console.log('this shit works');
};

fs.writeFileSync('newbmp.bmp', bitmap);