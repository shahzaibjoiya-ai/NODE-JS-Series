import express from 'express';
const app = express();

// Middleware function to log request details
app.use((req, res, next) => {
  console.log("user is accessing "+ req.url+ " page");
  next();
}); 
app.get('/', (req, res) => {
  res.send('This is Home Page');
});
app.get('/users', (req, res) => {
  res.send('this is Users page!');
});
app.get('/products', (req, res) => {
  res.send('This is Products Page!');
});
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});