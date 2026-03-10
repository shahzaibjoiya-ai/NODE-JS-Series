// path modules
const path = require('path');
const file = "files/Pakistan.txt";
console.log(path.dirname(file));
console.log(path.extname(file));
console.log(path.basename(file));
console.log(path.resolve(file));

// global constant
console.log(__dirname);
console.log(__filename);