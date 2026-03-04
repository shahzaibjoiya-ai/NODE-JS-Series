const fs = require('fs');
//create operation
const operation = process.argv[2];
if (operation === 'create') {
    const name = process.argv[3];
    const content = process.argv[4];
    const fullName = "files/"+name+".txt";
    fs.writeFileSync(fullName, content);
}
// read operation
else if (operation === 'read') {
    const name = process.argv[3];
    // const content = process.argv[4];
    const fullName = "files/"+name+".txt";
    let data = fs.readFileSync(fullName, 'utf-8');
    console.log(data);
 }
 // update operation
 else if (operation === 'update') {
    const name = process.argv[3];
    const content = process.argv[4];
    const fullName = "files/"+name+".txt";
    let data = fs.appendFileSync(fullName, content);
    console.log(data);
 }
// delete operation 
 else if (operation === 'delete') {
    const name = process.argv[3];
    const fullName = "files/"+name+".txt";
    fs.unlinkSync(fullName);
    console.log('File deleted successfully.');
 }
// fs.writeFile('files/India.txt', 'Hello, India!', (err) => {
//   if (err) throw err;
//   console.log('File created successfully.');
// });
// fs.unlinkSync('files/India.txt');

// const data = fs.readFileSync('files/Pakistan.txt', 'utf-8');
// console.log(data);

// fs.appendFile('files/Pakistan.txt', '\nHello, Pakistan you are great!', (err) => {
//   if (err) throw err;
//   console.log('Data appended successfully.');
// });