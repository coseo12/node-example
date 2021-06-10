import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.status(201).send('GET: /user');
});

router.post('/', (req, res) => {
  res.status(201).send('POST: /user');
});

router.put('/:id', (req, res) => {
  res.status(201).send('PUT: /user/:id');
});

export default router;
