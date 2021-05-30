const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const filePath = name => path.join(__dirname, name);

const readStream = fs.createReadStream(filePath('file.txt'));

const zlibStream = zlib.createGzip();

const writeStream = fs.createWriteStream(filePath('file4.zip'));

const piping = readStream.pipe(zlibStream).pipe(writeStream);

piping.on('finish', () => {
  console.log('done!!');
});
