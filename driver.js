var pin1 = require("pi-pins").connect(121),
    pin2 = require("pi-pins").connect(122),
    pin3 = require("pi-pins").connect(123),
    pin4 = require("pi-pins").connect(124)

pin1.mode('out')
pin2.mode('out')
pin3.mode('out')
pin4.mode('out')

//todo : 자동차 만들기