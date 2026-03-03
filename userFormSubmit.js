const querystring = require('querystring');
function userForm(req, res) {
    let dataBody = [];
    req.on('data', (chunk) => {
        dataBody.push(chunk);
    })
    req.on('end', () => {
        let rawdata = Buffer.concat(dataBody).toString();
        let readabledata = querystring.parse(rawdata);
        let datastring = 'my name is ' + readabledata.name + ' and my email is ' + readabledata.email;
        console.log(datastring);            
       
    })
     res.write(`<h1>You are in the submit page</h1>`);
        res.end();
}
module.exports = userForm;