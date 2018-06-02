let moment = require('moment')
let cardName = "admin@hackerton-network"

let composer = require('composer-client');
let BusinessNetworkConnection = composer.BusinessNetworkConnection;

let connection = new BusinessNetworkConnection();
let definition = "";

businessNetworkConnection.on('event', (event) => {
    // event: { "$class": "org.namespace.BasicEvent", "eventId": "0000-0000-0000-000000#0" }
    if(event.$class = "org.hackerton.EmergencyCarOccupied"){
        if() // 차 ID를 먼저 받아두는 프로시저 필요
        // 자신의 x, y와 patient_x,y에 따라 이동하는 함수
        // 

    }
    console.log(event);
});