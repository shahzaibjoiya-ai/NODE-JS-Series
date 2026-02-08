const http = require("http")
const fs = require("fs")
const { error } = require("console")
http.createServer((req,resp)=>{
   fs.readFile("html/web.html", "utf-8",(err,data)=>{
    if(err){
            resp.writeHead(600,{"content-type":"text/plain"})
        resp.write("this is internal server error")
        resp.end()
        return
    }
    resp.writeHead(200,{"content-type":"text/html"})
    resp.write(data)
    resp.end();
   })
}).listen(4600)