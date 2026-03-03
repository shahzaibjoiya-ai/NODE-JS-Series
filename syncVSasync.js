// Synchronous vs Asynchronous code example with console logs
console.log("Paksitan");
setTimeout(() => {
    console.log("China");
}, 2000);
console.log("India");
console.log("RUssia");
console.log("USA");

// Asyncronous  code example with file reading
const fs = require("fs");
console.log("Start");
fs.readFile("dummy.txt", "utf-8", (error, data) => {
    if (error) {
        console.error("Error reading file:", error);
        return;
    }
    console.log("File content:", data);
});

// Synchronous code example with file reading

const fs = require("fs");
console.log("Start");
const data = fs.readFileSync("dummy.txt", "utf-8");
console.log("File content:", data);
console.log("End");