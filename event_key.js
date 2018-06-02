var readline = require('readline');
let http = require('http');

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);
 
// listen for the "keypress" event
process.stdin.on('keypress', function (ch, key) {
  console.log('got "keypress"', key);
  if (key && key.ctrl && key.name == 'c') {
    process.stdin.pause();
  }
  if (key && key.name == 'left') {
    http.get("http://localhost:7777/drive");
  }
});
 
process.stdin.setRawMode(true);
process.stdin.resume();
