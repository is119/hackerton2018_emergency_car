var express = require('express');
var http = require('http');
var fs = require('fs');
// var sslOptions = {
//     key: fs.readFileSync('key2.pem'),
//     cert: fs.readFileSync('cert2.pem')
// };

var app = express();

var router = require('./driver.js')

var server = router.init(app);

http.createServer(server).listen(7777);
//driver : 7777, composer : 8888