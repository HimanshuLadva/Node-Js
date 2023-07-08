const http = require("node:http");
const fs = require('fs');

const port = process.env.port || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  console.log(req.url);
  if (req.url == "/") {
    const data = fs.readFileSync('index.html')
    res.end(data.toString());
  } else if (req.url == "/hello") {
    res.end("<h1>Hello Himanshu</h1>");
  } else {
    res.statusCode = 404;
    res.end("<h1>Page not found</h1>");
  }
});

server.listen(port, () => {
  console.log("server is established");
});
