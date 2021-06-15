import jwt from 'jsonwebtoken';

const payload = { id: 'userId', isAdmin: true };
const secretKey = `iD1J5#Zt9KoDywHy*MuQ4K5Pdh74Y5BX`;
const options = {
  expiresIn: 2,
};
const token = jwt.sign(payload, secretKey, options);

setTimeout(() => {
  jwt.verify(token, secretKey, (err, decoded) => {
    console.log(err, decoded);
  });
}, 3000);

// const edited = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InVzZXJJZCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2MjM3NTQ5OTB9.pGpwqrETE0Yyf_DNhKyxWp8GZXU9OyvI1u5ATV8rzh4`;
// jwt.verify(edited, secretKey, (err, decoded) => {
//   console.log(err, decoded);
// });

console.log(token);
