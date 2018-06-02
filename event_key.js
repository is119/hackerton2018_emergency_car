var readline = require('readline');
let http = require('http');

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);
 /*
// listen for the "keypress" event
process.stdin.on('keypress', function (ch, key) {
  console.log('got "keypress"', key);
  if (key && key.ctrl && key.name == 'c') {
    process.stdin.pause();
  }
  if (key && key.name == 'left') {
    http.get("http://localhost:7777/left");
  }
 if (key && key.name == 'right') {
    http.get("http://localhost:7777/right");
  }
 if (key && key.name == 'up') {
    http.get("http://localhost:7777/up");
  }
 if (key && key.name == 'down') {
    http.get("http://localhost:7777/down");
  }
});
*/
process.stdin.on('keyup', function (ch, key) {
  console.log('got "keyup"', key);
  if (key && key.ctrl && key.name == 'c') {
    process.stdin.pause();
  }
  if (key && key.name == 'left') {
    http.get("http://localhost:7777/left_up");
  }/*
 if (key && key.name == 'right') {
    http.get("http://localhost:7777/right_up");
  }
 if (key && key.name == 'up') {
    http.get("http://localhost:7777/up_up");
  }
 if (key && key.name == 'down') {
    http.get("http://localhost:7777/down_up");
  }*/
});

process.stdin.setRawMode(true);
process.stdin.resume();
