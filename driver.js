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
        res.send("Hello World\n!");
    });
    return server
}
