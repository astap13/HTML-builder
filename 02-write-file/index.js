const fs = require('fs');
const path = require('node:path').join(__dirname, 'text.txt');
const writeStream = fs.createWriteStream(path, 'utf-8');

process.stdout.write('Write something\n');

process.stdin.on('data', (chunk) => {

  if (chunk.toString().trim() === 'exit') {
    process.exit();
  }
  writeStream.write(chunk);
});

process.on('SIGINT', () => {
    process.exit();
  });
  
  process.on('exit', () => {
    console.log('Bye-bye!');
  });
  