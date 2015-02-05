'use strict';

var fs = require('fs');
var bitmap = fs.readFileSync('./img/test.bmp');
 
var colorPalette = bitmap.slice(54, 1078);

for(var i=0; i<1024; i++) {
	colorPalette[i] = colorPalette[i + 2];
}

fs.writeFileSync('newbmp.bmp', bitmap);