var sheesh = require('ws');
var fs = require('fs');
var server = new sheesh.Server({ port: 5000 });

server.on('connection', (socket) => {
  console.log('Client connected');

  socket.on('message', (message) => {
    console.log("writing");
    const bytes = message.toString().split(',').map(Number);
    const text = String.fromCharCode.apply(null, bytes);
    // this what i mean by u having to manually change file name
    fs.appendFile("name.bin", text, (err) => {
      if (err) throw err;
      console.log('Data appended to file');
    });
  });

  socket.on('close', () => {
    console.log('Client disconnected');
  });

});
