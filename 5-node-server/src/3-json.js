const http = require('http');
const fs = require('fs');
// const http2 = require('http2')

const PORT = 4000;

const courses = [
  { name: 'HTML' },
  { name: 'CSS' },
  { name: 'JS' },
  { name: 'NODE' },
];

const server = http.createServer((req, res) => {
  const url = req.url;
  const methods = req.method;
  if (url === '/courses') {
    if (methods === 'GET') {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(courses));
    } else if (methods === 'POST') {
      const body = [];
      req.on('data', chunk => {
        console.log(chunk);
        body.push(chunk);
      });

      req.on('end', () => {
        const course = JSON.parse(Buffer.concat(body).toString());
        courses.push(course);
        console.log(courses);
        res.writeHead(201);
        res.end();
      });
    }
  }
});

server.listen(PORT, () => {
  console.log(`server startd port ${PORT}`);
});
