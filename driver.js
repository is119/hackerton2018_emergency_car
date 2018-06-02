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
    server.get('/', function (req, res) {
        pin1.value(false);
        pin3.value(false);
        setTimeout(pin1.value(true), 2000);
        setTimeout(pin3.value(true), 2000);
        res.send("Hello World!");
    });
    return server
}
