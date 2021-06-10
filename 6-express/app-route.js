import express from 'express';
import postRouter from './router/post.js';
import userRouter from './router/user.js';
import cors from 'cors';

const PORT = 4000;

const app = express();

app.use(
  cors({
    origin: ['https://127.0.0.1:4000'],
    optionsSuccessStatus: 200,
    credentials: true, // Access-Control-Allow-Credentials: true
  })
);
app.use(express.json()); // REST API -> Body parse
app.use(express.urlencoded({ extended: false })); // HTML -> Form parse
app.use(
  express.static('public', {
    dotfiles: 'ignore',
    etag: false,
    index: false,
    maxAge: '1d',
    redirect: false,
    setHeader: (res, path, stat) => {
      res.set('x-timestamp', Date.now());
    },
  })
); // Static folder setup

app.use('/posts', postRouter);
app.use('/users', userRouter);

app.listen(PORT, () => {
  console.log(`Server to running...`);
});
