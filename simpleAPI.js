const http = require("http")

const userData = [{
    name: "shahzaib",
    age: 23,
    email: "shahzaib@testgmail.com",
},


    {
        name: "Muhammad Aslam",
        age: 22,
        email: "Aslam@testgmail.com",
    },

    {
        name: "Imran Ali",
        age: 24,
        email: "Imran@testgmail.com"
    }
]

http.createServer((req, resp) => {
    resp.setHeader("Content-Type","application/json")
    resp.write(JSON.stringify(userData))
    resp.end()
}).listen(5000);