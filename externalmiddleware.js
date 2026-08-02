import express from 'express';
import morgan from 'morgan';
const app = express();
app.use(morgan('dev'));
app.get ("/", (req, res) => {
    res.send("This is home page");
});

app.get ("/about", (req, res) => {
    res.send("This is about page");
});
app.use(express.urlencoded({ extended: true }));
app.get ("/contact", (req, res) => {
    res.send("This is contact page");
});
app.listen(3000);