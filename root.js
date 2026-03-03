const http = require('http');
const userForm = require('./userForm');
const userFormSubmit = require('./userFormSubmit');
http.createServer((req, res) => {
    res.writeHead(200, { 'content-Type': 'text/html' });
    if (req.url === '/') {
        userForm(req, res);
        userFormSubmit(req, res);
    }
    else if (req.url === '/submit' ){
        userFormSubmit(req, res);
    }
    res.end();
}).listen(3200);
