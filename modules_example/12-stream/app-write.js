const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'file3.txt');

const writeStream = fs.createWriteStream(filePath).on('finish', () => {
  console.log('finished!');
});

writeStream.write('hello!!');
writeStream.write('world!!');
writeStream.end();
