var fs, a, err, text;
fs = require('fs');
a = 1;
fs.readFile('continuation.js', function () {
  err = arguments[0];
  text = arguments[1];
  a += 1;
  console.log(a, err, text);
});