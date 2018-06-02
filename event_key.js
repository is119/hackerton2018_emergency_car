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
    console.log('left send');
    http.get("http://localhost:7777/left");
  }
 if (key && key.name == 'right') {
    console.log('right send');
    http.get("http://localhost:7777/right");
  }
 if (key && key.name == 'up') {
    console.log('up send');
    http.get("http://localhost:7777/up");
  }
 if (key && key.name == 'down') {
    console.log('down send');
    http.get("http://localhost:7777/down");
  }
 if (key && key.name == 'space') {
    console.log('space send');
    http.get("http://localhost:7777/space");
  }
});

process.stdin.setRawMode(true);
process.stdin.resume();
