import express from 'express';
import { body, param, validationResult } from 'express-validator';
const app = express();

app.use(express.json());

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  return res.status(400).json({ message: errors.array()[0].msg });
};

app.post(
  '/users',
  [
    body('name')
      .trim()
      .notEmpty()
      .withMessage('이름 필수')
      .isLength({ min: 2, max: 10 })
      .withMessage('이름은 두글자 이상!'),
    body('age').notEmpty().isInt().withMessage(`숫자`),
    body('email').isEmail().withMessage(`email!!!`).normalizeEmail(),
    validate,
  ],
  (req, res, next) => {
    res.sendStatus(201);
  }
);

app.get(
  '/:email',
  [param('email').notEmpty().isEmail().withMessage('메일 필수'), validate],
  (req, res, next) => {
    res.send('🌈');
  }
);

app.listen(4000);
