const http = require('http');
const data = {
firstName:'Rajat',
lastName:'Parbhakar'
}
const site = http.createServer(function(req,res){
console.log('Hello World');
console.log(req.headers);
console.log(req.url);
res.setHeader('Content-Type','application/json');
//res.setHeader('Content-Type','text/html');
//res.write(<h1>Hello World</h1>);
re.write(JSON.stringify(data));
res.end();
});

site.listen(3000);