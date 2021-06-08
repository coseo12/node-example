const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'file.txt');

const data = [];
fs.createReadStream(filePath, {
  //   highWaterMark: 8, // default 64kB
  //   encoding: 'utf-8',
})
  .readStream.on('data', chunk => {
    //   console.log(chunk);
    console.count('data');
    data.push(chunk);
  })
  .readStream.on('end', () => {
    console.log(data.join(''));
  })
  .readStream.on('error', console.error);
