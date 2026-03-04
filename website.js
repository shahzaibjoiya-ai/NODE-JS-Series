const http = require('http');
const fs = require('fs');
http.createServer((req, res) => {
    if (req.url == '/') {
        fs.readFile('index.html', "utf8", (err, data) => {
            if (err) {
                res.writeHead(500, { 'content-Type': 'text/plain' });
                res.end('internal server error');
                return false;
            }
                 res.write(data);
            res.end();
    });    
        
    }
    else if (req.url == '/style.css') {
        fs.readFile('style.css', "utf8", (err, data) => {
            if (err) {
                res.writeHead(500, { 'content-Type': 'text/plain' });
                res.end('css not found');
                return false;
            } 
             res.writeHead(200, { 'content-Type': 'text/css' });
               
                res.end(data);
        });
    }
}).listen(4200);