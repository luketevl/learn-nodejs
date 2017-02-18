var http = require('http');
var configuracoes = {
                      host: 'localhost',
                      port: 3000,
                      path: '/produtos',
                      method: 'post',
                      headers: {
                                'Accept': 'application/json',
                                'Content-type': 'application/json',
                      }
                    };
var cliente = http.request(configuracoes, function(response){
  console.log(response.statusCode);
  response.on('data', function(body){
    console.log('Corpo ' +body);
  });
});

var produto = {
                titulo:     '',
                descricao:  'com http',
                preco:      90,
};
console.log(produto);
cliente.end(JSON.stringify(produto));
