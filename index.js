const express = require('express');
const app = express();
const port = 3200;

app.get('/', (req, res) => {
  res.send('This is Home Page');
});
app.get('/about', (req, res) => {
  res.send('This is About Page');
});
app.get('/contact', (req, res) => {
  res.send('This is Contact Page');
});
app.get('/services', (req, res) => {
  res.send('This is Services Page');
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});