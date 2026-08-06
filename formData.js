import express from 'express';
const app = express();

app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.send('home page');
});
app.get ('/add_users', (req, res) => {
    res.render('add-user');
}   );

app.post ('/submit_users', (req, res) => {
    console.log(req.body);
    res.render('submitUser',req.body);
}   );
// loops and arrays
app.get ('/users', (req, res) => {
    
    const users = [
        { name: 'John', age: 30 },
        { name: 'Jane', age: 25 },
        { name: 'Bob', age: 40 }
    ];
    res.render('users', { users: users, isLogin: true });
});
app.listen(3200);