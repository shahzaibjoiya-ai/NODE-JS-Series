const fs = require ("fs")
const os = require ("os")
fs.writeFileSync("dummy.txt", "This is dummy text of File System")
console.log(os.platform());
console.log(os.hostname());
console.log(os.version());
console.log(os.machine());
console.log(os.cpus());

//Global Objects in Node Js or Javascript
console.log("this is shahzaib")
console.log(process.cwd());
console.log(process.pid);
