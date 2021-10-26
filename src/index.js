const net = require("net");

const server = net.createServer((socket) => {
  console.log("通信来たよ！");

  socket.on("data", (data) => {
    console.log(data.toString());

    const statusLine = "HTTP/1.1 200 OK\r\n";
    const header = "Host: codesandbox\r\n";

    const response = statusLine + header + "\r\n" + "HELLO WORLD\r\n";
    socket.write(response);
    socket.end();
  });
});
server.listen(8080);
