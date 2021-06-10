const http = require('http');
const fs = require('fs');
// const http2 = require('http2')

const PORT = 4000;

const server = http.createServer((req, res) => {
  const url = req.url;
  res.setHeader('Content-type', 'text/html');
  if (url === '/') {
    fs.createReadStream(`./src/html/index.html`).pipe(res);
  } else if (url === '/courses') {
    fs.createReadStream(`./src/html/courses.html`).pipe(res);
  } else {
    fs.createReadStream(`./src/html/not-found.html`).pipe(res);
  }
});

server.listen(PORT, () => {
  console.log(`server startd port ${PORT}`);
});
