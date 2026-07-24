import express from 'express';
const app = express();

// Middleware function to log request details
function checkAgeRouteMiddleware(req, res, next) {
      console.log(req.query.age);

  if (!req.query.age || req.query.age < 18) {
    return res.send('Access denied. You must be at least 18 years old.');
  }
  next();
}
function checkURLRouteMiddleware(req, res, next) {
  console.log('Request details:', req.method, req.url);
  next();
}

app.get('/', (req, res) => {
  res.send('This is Home Page');
});
app.get('/users', checkAgeRouteMiddleware,checkURLRouteMiddleware, (req, res) => {
  res.send('This is Users Page');
});
app.get('/products', checkAgeRouteMiddleware, checkURLRouteMiddleware, (req, res) => {
  res.send('This is Products Page');
});
app.get('/login', (req, res) => {
  res.send(`
    <form action="/submit" method="post">
    <input type="text" placeholder ="enter email" name="email"/>
        <input type="text" placeholder ="enter password" name ="password"/>
        <button>Login</button>
        <form/>

    `);
});
app.post('/submit', (req, res) => {
  console.log("user login details are : ",req.body)
  res.send('Form Submitted');
});
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});