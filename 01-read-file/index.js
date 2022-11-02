const fs = require('fs');
const path = require('path');
const getFilePath = path.join(__dirname, 'text.txt');
const stream = fs.createReadStream(getFilePath, 'utf8');

stream.on('data', function (a) {
  process.stdout.write(a);
});
