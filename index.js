var express = require('express');
var app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({extended}));
app.use(bodyparser.json());
app.use(function(req,res,next){
    console.log("I am in the Middle");
    console.log(req.body.username);
    console.log(req.body.password);
    next();
})

app.get('/', function(req,res){
    res.send('GET sent')
})
app.post('/', function(req,res){
    res.send('POST sent')
})
app.put('/', function(req,res){
    res.send('PUT sent ')
})
app.delete('/', function(req,res){
    res.send('DELETE sent')
})

app.listen(3000);
