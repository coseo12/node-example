const fs = require('fs').promises;
const path = require('path');

// read a file
fs.readFile(path.join(__dirname, 'text.txt'), 'utf8')
  .then(data => console.log(data))
  .catch(console.error);

// writing a file
fs.writeFile(path.join(__dirname, 'text.txt'), 'Hello fs ').catch(
  console.error
);
fs.appendFile(path.join(__dirname, 'text.txt'), 'append!!').catch(
  console.error
);

// copy
fs.copyFile(
  path.join(__dirname, 'text.txt'),
  path.join(__dirname, 'copy.txt')
).catch(console.error);

// folder
fs.mkdir(path.join(__dirname, 'sub-folder')).catch(console.error);

fs.readdir(__dirname)
  .then(data => console.log(data))
  .catch(console.error);
