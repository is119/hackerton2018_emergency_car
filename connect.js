// org.hackerton.EmergencyCarOccupied"
let http = require('http')
let cardName = "admin@hackerton-network"

let composer = require('composer-client');
let BusinessNetworkConnection = composer.BusinessNetworkConnection;

let connection = new BusinessNetworkConnection();
let definition = "";
let factory = "";

main()
connection.on('event',(event)=>{
    if(event.name == 'EmergencyCarOccupied'){
       console.log("RECV : Event omitted!")
       http.request("localhost:7777/drive"); 
    }
})
async function main(){
    definition = await connection.connect(cardName);
    factory = definition.getFactory();
}
exports.init = function(server){
    server.get('/drive', function (req, res) { // Recv from Driver
       console.log("RECV : Event omitted!") // ++
       http.request("localhost:7777/drive");  // ++
    });
    return server
}
