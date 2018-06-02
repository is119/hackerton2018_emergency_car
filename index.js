// org.hackerton.EmergencyCarOccupied"
let moment = require('moment')
let cardName = "admin@hackerton-network"

let composer = require('composer-client');
let BusinessNetworkConnection = composer.BusinessNetworkConnection;

let connection = new BusinessNetworkConnection();
let definition = "";
let factory = "";

main()
connection.on('event',(event)=>{
    console.log(event)
    if(event.name == 'org.hackerton.EmergencyCarOccupied'){
       console.log("RECV : Event omitted!") 
    }
})
async function main(){
    definition = await connection.connect(cardName);
    factory = definition.getFactory();

}