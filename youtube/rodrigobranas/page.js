const http = require('http');

http.createServer((req, res) =>{
  res.write('<html><head><title>page</title></head><body><h1>ola</h1></body></html>');
  res.end();
}).listen(3009);
