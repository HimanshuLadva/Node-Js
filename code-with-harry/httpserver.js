const http = require('node:http');

const port = process.env.port || 3000;

const server = http.createServer((req, res) => {
   console.log(req.url);
   res.statusCode = 200;
   res.setHeader('Content-Type', 'text/html'); 
   res.end('<h1>Hello Himanshu</h1>');
});

server.listen(port, () => {
   console.log('server is established');
});