var http = require('http');

var servidor = http.createServer(function(request, response){
  if(request.url == "/produtos"){
    response.end("<html><body><h1>Listando os produtos da Loja</h1></body></html>");
  }
  else{
    response.end("<html><body><h1>Home</h1></body></html>");
  }
}).listen(3000, "localhost");

console.log('Servidor Rodando');
