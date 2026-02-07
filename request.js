const http = require ("http")

http.createServer((req,resp)=>{
    console.log(req.headers.host)
    if(req.url=="/")
    {
        resp.write("<h1>This is Home Page</h1>")
    }
    else if(req.url == "/login")
    {
        resp.write("<h1>This is Login Page</h1>")
    }
    else{
        resp.write("<h1>other page</h1>")
    }
    resp.write("<h1>This is Node Js Series</h1>")
    resp.end()
}).listen(4600);