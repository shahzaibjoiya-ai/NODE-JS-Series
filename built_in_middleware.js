import express from 'express';
const app = express();

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

app.get ("/login", (req, res) => {
    res.send(`
    <form action="/submit" method="post">
    <input type="text" placeholder ="enter email" name="email"/>
        <input type="text" placeholder ="enter password" name ="password"/>
        <button>Login</button>
        <form/>

    `);
    app.post("/submit", (req, res) => {
        console.log("user login details are : ",req.body)
        res.send("Form Submitted");
    });
});
app.listen(3000);