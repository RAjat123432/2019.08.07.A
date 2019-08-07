const http= require('http');
const data = {
    firstName: 'Rajat',
    lastName: 'Parbhakar'}

const site = http.createServer(function(req,res){
    res.setHeader('Content-Type', 'text/html');
    console.log("Hello World")
res.write(JSON.stringify(data))
console.log(req.url);
//res.setHeader('Content-Type', 'application/json');

res.write('<h1>Hello World2');
res.end();
});

site.listen(3000);
