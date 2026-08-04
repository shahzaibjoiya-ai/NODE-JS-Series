import express from 'express';
const app = express();
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
  res.render('home', { title: 'Home Page', message: 'Welcome to the Home Page!' });
});
app.listen(3000);