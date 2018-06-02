var pin1 = require("pi-pins").connect(128),
    pin2 = require("pi-pins").connect(129),
    pin3 = require("pi-pins").connect(130),
    pin4 = require("pi-pins").connect(46)

pin1.mode('out')
pin2.mode('out')
pin3.mode('out')
pin4.mode('out')

//todo : 자동차 만들기

exports.init = function(server){
    server.get('/drive', function (req, res) {
        pin1.value(true);
        pin3.value(true);
        setTimeout(function() { pin3.value(false); pin1.value(false); }, 2000);
        res.send("Hello World!\n");
    });
    return server
}

exports.init = function(server){
    server.get('/space', function (req, res) {
        pin1.value(false);
        pin2.value(false);
        pin3.value(false);
        pin4.value(false);
        
        res.send("All stop!\n");
    });
    return server
}


exports.init = function(server){
    server.get('/left', function (req, res) {
        pin1.value(true);
        //pin3.value(true);
        res.send("Left on\n");
    });
    return server
}

exports.init = function(server){
    server.get('/right', function (req, res) {
        //pin1.value(true);
        pin3.value(true);
        res.send("right on\n");
    });
    return server
}

exports.init = function(server){
    server.get('/up', function (req, res) {
        pin1.value(true);
        pin3.value(true);
        res.send("Up on\n");
    });
    return server
}

exports.init = function(server){
    server.get('/down', function (req, res) {
        pin2.value(true);
        pin4.value(true);
        res.send("Down on\n");
    });
    return server
}
