const http = require ("http")

http.createServer((req,resp)=>{
    resp.write("This is Node Js Series")
    resp.end("Hello This is From Shahzaib Asghar")
}).listen(4600);