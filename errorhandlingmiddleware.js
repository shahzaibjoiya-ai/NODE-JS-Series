import express from 'express';
const app = express();

app.get ("/", (req, res) => {
    res.send("This is home page");
});

app.get ("/about", (req, res) => {
    res.send1("This is about page");
});
app.get ("/error", (req, res) => {
    res.send("This is error page");
});
function errorHandler(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  }
app.use(errorHandler);
app.listen(3000);