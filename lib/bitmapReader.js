'use strict';

var fs = require('fs');

module.exports = function() {
  var bitmap = fs.readFileSync('./img/test.bmp');

  var colorPalette = bitmap.slice(54, 1078);

  for(var i=0; i<1024; i++) {
  	// colorPalette[i] = colorPalette[i + 2];  // Weird-O-riser
    colorPalette[i] = (colorPalette[i] -255) * -1; // Inverter
  }

  fs.writeFileSync('./img/newbmp.bmp', bitmap);
};
