var express = require('express');
var http = require('http');
var fs = require('fs');
// var sslOptions = {
//     key: fs.readFileSync('key.pem'),
//     cert: fs.readFileSync('cert.pem')
// };

var app = express();

var router = require('./connect.js')

var server = router.init(app);

http.createServer(server).listen(8888);
//driver : 7777, composer : 8888