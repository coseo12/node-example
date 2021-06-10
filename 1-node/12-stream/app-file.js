const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'file.txt');

const beforeMem = process.memoryUsage().rss;
fs.readFile(filePath, (_, data) => {
  fs.writeFile(filePath, data, () => {});
  // calculate
  const afterMem = process.memoryUsage().rss;
  const diff = afterMem - beforeMem;
  const consumed = diff / 1024 / 1024;
  console.log(diff);
  console.log(`Consumed Memory: ${consumed}MB`);
});
