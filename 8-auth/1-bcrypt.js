import bcrypt from 'bcrypt';

const salt = 10; // 추천: 10 ~ 12
const password = 'abcd1234';
const hashed = bcrypt.hashSync(password, salt);

console.log(`password: ${password}, hashed: ${hashed}`);

const result = bcrypt.compareSync(password, hashed);

console.log(`result: ${result}`);
