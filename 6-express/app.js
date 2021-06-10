import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';

const PORT = 4000;

const app = express();

app.use(helmet());
app.use(
  cors({
    origin: ['https://127.0.0.1:4000'],
    optionsSuccessStatus: 200,
    credentials: true, // Access-Control-Allow-Credentials: true
  })
);
app.use(morgan('combined'));
app.use(cookieParser());
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

app.get('/', (req, res) => {
  console.log(req.body);
  console.log(req.cookies);
  res.send('Welcome!');
});

app.listen(PORT, () => {
  console.log(`Server to running...`);
});
