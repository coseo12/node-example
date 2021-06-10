import express from 'express';
import fs from 'fs';
import fsAsync from 'fs/promises';

const PORT = 4000;

const app = express();

app.use(express.json());

app.get('/file', (req, res) => {
  fs.readFile('/file.txt', (err, data) => {
    if (err) {
      res.sendStatus(404);
    }
  });
});
app.get('/file1', (req, res) => {
  const data = fs.readFileSync('/file1.txt');
  res.send(data);
});
app.get('/file2', (req, res) => {
  fsAsync.readFile('/file2.txt').then(data => res.send(data));
});
app.get('/file3', async (req, res) => {
  const data = fsAsync.readFile('/file3.txt');
  res.send(data);
});

app.use((error, req, res, next) => {
  console.error(error.message);
  res.status(500).json({ error: 'Something went wrong' });
});

app.listen(PORT, () => {
  console.log(`Server to running...`);
});
