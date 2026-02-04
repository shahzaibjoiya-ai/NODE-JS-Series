const http = require ("http")
const age = 29;
http.createServer((req,resp)=>{
    resp.setHeader("Content-Type","text/html")
    resp.write(`
        <html>
        <head>
        <body>
        <title>Node Js</title>
            <h1>Hello This is Shahzaib Asghar</h1>
            <h2>`+23+`</h2>
            <h2>`+new Date+`</h2>

        </body>
        </head>
        </html>
    `)
    resp.end()
}).listen(4600);