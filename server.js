var express = require('express');
var app = new express();
var fs = require('fs');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get("/",function(req,res){
	res.sendFile( __dirname + '/index.html');
});

app.use(express.static(__dirname));

app.listen(3900,()=>{
	console.log('server running on 3900');
});