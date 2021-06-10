const http = require('http');
const ejs = require('ejs');
// const http2 = require('http2')

const PORT = 4000;

const name = 'Seo';
const courses = [
  { name: 'HTML' },
  { name: 'CSS' },
  { name: 'JS' },
  { name: 'NODE' },
];

const server = http.createServer((req, res) => {
  const url = req.url;
  res.setHeader('Content-type', 'text/html');
  if (url === '/') {
    ejs
      .renderFile('./src/template/index.ejs', { name })
      .then(data => {
        res.end(data);
      })
      .catch(console.error);
  } else if (url === '/courses') {
    ejs
      .renderFile('./src/template/courses.ejs', { courses })
      .then(data => {
        res.end(data);
      })
      .catch(console.error);
  } else {
    ejs
      .renderFile('./src/template/not-found.ejs', { name })
      .then(data => {
        res.end(data);
      })
      .catch(console.error);
  }
});

server.listen(PORT, () => {
  console.log(`server startd port ${PORT}`);
});
