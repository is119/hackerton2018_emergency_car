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
        var v1 = setTimeout(function() { pin3.value(false); pin1.value(false); }, 3000);
        var v2 = setTimeout(function() { pin2.value(true); pin4.value(true); }, 2000);
        var v3 = setTimeout(function() { pin2.value(false); pin4.value(false); }, 3000);
        clearTimeout(v1);
        clearTimeout(v2);
        clearTimeout(v3);
        res.send("Hello World!\n");
    });
    server.get('/space', function (req, res) {
        pin1.value(false);
        pin2.value(false);
        pin3.value(false);
        pin4.value(false);
        
        res.send("All stop!\n");
    });
    server.get('/left', function (req, res) {
        pin1.value(true);
        //pin3.value(true);
        res.send("Left on\n");
        res.end();
    });
    server.get('/right', function (req, res) {
        //pin1.value(true);
        pin3.value(true);
        res.send("right on\n");
        res.end();
    });
    server.get('/up', function (req, res) {
        pin1.value(true);
        pin3.value(true);
        res.send("Up on\n");
        res.end();
    });
    server.get('/down', function (req, res) {
        pin2.value(true);
        pin4.value(true);
        res.send("Down on\n");
        res.end();
    });
    return server
}
