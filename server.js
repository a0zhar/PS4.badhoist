var sheesh = require("ws");
var fs = require("fs");
var server = new sheesh.Server({ port: 5000 });

server.on("connection", (socket) => {
  console.log("Client connected");
  socket.on("message", (message) => {
    const [name, data] = message.toString().split(",");
    const bytes = data.split(",").map(Number);
    const text = String.fromCharCode.apply(null, bytes);
    fs.appendFile(name, text, (err) => {
      if (err) throw err;
      console.log(text.length + " bytes written!");
    });
  });

  socket.on("close", () => {
    console.log("Client disconnected");
  });
});
