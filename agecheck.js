import express from 'express';
const app = express();
function ageCheck(req, res, next) {
  const age = req.query.age;
  if (age < 18) {
    res.send('<h1>You are not allowed to access this page</h1>');
  } else {
    next();
  }
}
app.use(ageCheck);
// function ipCheck(req, res, next) {
//   const ip = req.socket.remoteAddress;
//   console.log(ip);
//   if (ip.includes('193.168.54.2')) {
//     res.send('<h1>You are not allowed to access this page</h1>');
//   }
//   next();
// }
app.use(ipCheck);
app.get('/', (req, res) => {
  res.send('<h1>This is Home Page</h1>');
});
app.get('/login', (req, res) => {
  res.send('<h1>This is Login Page</h1>');
});
app.get('/admin', (req, res) => {
  res.send('<h1>This is Admin Page</h1>');
});
app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});