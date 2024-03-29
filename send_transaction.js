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
    if(event.$type == 'EmergencyCarOccupied' && event.car.$identifier == "1"){
       console.log("SEND : Event omitted!") 
    }
})
async function main(){
    definition = await connection.connect(cardName);
    factory = definition.getFactory();

    let transaction = factory.newTransaction('org.hackerton','requestEmergencyCar')
    let requester = factory.newRelationship('org.hackerton', 'Requester','1');
    let patient = factory.newRelationship('org.hackerton', 'Patient','1');
    transaction.requester= requester;
    transaction.patient = patient;
    transaction.x = 1.0;
    transaction.y = 1.0;
    console.log("")
    await connection.submitTransaction(transaction);
}